import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactBody = {
  name?: string;
  email?: string;
  message?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function parseRecipientEmails(raw: string) {
  return raw
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
    .filter((item, index, list) => list.indexOf(item) === index);
}

function parsePort(raw: string) {
  const value = Number.parseInt(raw, 10);
  return Number.isNaN(value) ? 465 : value;
}

function parseSecure(raw: string) {
  return ["1", "true", "yes", "on"].includes(raw.toLowerCase());
}

function getSmtpConfig() {
  const host = process.env.SMTP_HOST?.trim() || "";
  const port = parsePort(process.env.SMTP_PORT?.trim() || "465");
  const secure = parseSecure(process.env.SMTP_SECURE?.trim() || "true");
  const user = process.env.SMTP_USER?.trim() || "";
  const pass = process.env.SMTP_PASS?.trim() || "";

  return { host, port, secure, user, pass };
}

async function readContactBody(request: Request) {
  const contentType = request.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    const body = (await request.json()) as ContactBody;
    return {
      name: body.name?.trim() || "",
      email: body.email?.trim() || "",
      message: body.message?.trim() || "",
      isFormPost: false,
    };
  }

  const formData = await request.formData();

  return {
    name: String(formData.get("name") || "").trim(),
    email: String(formData.get("email") || "").trim(),
    message: String(formData.get("message") || "").trim(),
    isFormPost: true,
  };
}

function redirectWithStatus(request: Request, params: Record<string, string>) {
  const url = new URL("/contact", request.url);
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value);
  }
  return NextResponse.redirect(url);
}

export async function GET() {
  const toEmails = parseRecipientEmails(process.env.CONTACT_TO_EMAIL?.trim() || "");
  const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim() || "";
  const smtp = getSmtpConfig();

  return NextResponse.json({
    ok: true,
    service: "smtp",
    configured: Boolean(smtp.host && smtp.user && smtp.pass && toEmails.length > 0 && fromEmail),
  });
}

export async function POST(request: Request) {
  try {
    const { name, email, message, isFormPost } = await readContactBody(request);

    if (!name || !email || !message) {
      if (isFormPost) {
        return redirectWithStatus(request, { error: "Please fill in all required fields." });
      }

      return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      if (isFormPost) {
        return redirectWithStatus(request, { error: "Please provide a valid email address." });
      }

      return NextResponse.json({ ok: false, error: "Please provide a valid email address." }, { status: 400 });
    }

    if (message.length < 10) {
      if (isFormPost) {
        return redirectWithStatus(request, { error: "Message is too short." });
      }

      return NextResponse.json({ ok: false, error: "Message is too short." }, { status: 400 });
    }

    const toEmails = parseRecipientEmails(process.env.CONTACT_TO_EMAIL?.trim() || "");
    const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim() || "";

    const smtp = getSmtpConfig();

    if (!smtp.host || !smtp.user || !smtp.pass || toEmails.length === 0 || !fromEmail) {
      if (isFormPost) {
        return redirectWithStatus(request, { error: "Email delivery is not configured." });
      }

      return NextResponse.json(
        { ok: false, error: "Email delivery is not configured." },
        { status: 500 }
      );
    }

    if (!isValidEmail(smtp.user) || !toEmails.every(isValidEmail) || !isValidEmail(fromEmail)) {
      if (isFormPost) {
        return redirectWithStatus(request, { error: "Email delivery is misconfigured." });
      }

      return NextResponse.json(
        { ok: false, error: "Email delivery is misconfigured. Please check SMTP and email addresses." },
        { status: 500 }
      );
    }

    const safeName = name.replace(/[\r\n]/g, " ");
    const safeEmail = email.replace(/[\r\n]/g, " ");
    const safeMessage = message.replace(/\r\n/g, "\n").trim();

    try {
      const transporter = nodemailer.createTransport({
        host: smtp.host,
        port: smtp.port,
        secure: smtp.secure,
        auth: {
          user: smtp.user,
          pass: smtp.pass,
        },
      });

      await transporter.verify();

      await transporter.sendMail({
        from: fromEmail,
        to: toEmails,
        replyTo: safeEmail,
        subject: `New contact form message from ${safeName}`,
        text: [
          "New contact form submission",
          "",
          `Name: ${safeName}`,
          `Email: ${safeEmail}`,
          "",
          "Message:",
          safeMessage,
        ].join("\n"),
      });
    } catch (error) {
      console.error("SMTP contact email send failed", error);
      if (isFormPost) {
        return redirectWithStatus(request, { error: "Message could not be sent right now. Please try again." });
      }

      return NextResponse.json(
        { ok: false, error: "Message could not be sent right now. Please try again." },
        { status: 500 }
      );
    }

    if (isFormPost) {
      return redirectWithStatus(request, { sent: "1" });
    }

    return NextResponse.json({ ok: true, message: "Thanks. Your message has been sent successfully." });
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }
}
