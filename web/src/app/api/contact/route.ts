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
    const body = (await request.json()) as ContactBody;
    const name = body.name?.trim();
    const email = body.email?.trim();
    const message = body.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ ok: false, error: "Please provide a valid email address." }, { status: 400 });
    }

    if (message.length < 10) {
      return NextResponse.json({ ok: false, error: "Message is too short." }, { status: 400 });
    }

    const toEmails = parseRecipientEmails(process.env.CONTACT_TO_EMAIL?.trim() || "");
    const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim() || "";

    const smtp = getSmtpConfig();

    if (!smtp.host || !smtp.user || !smtp.pass || toEmails.length === 0 || !fromEmail) {
      return NextResponse.json(
        { ok: false, error: "Email delivery is not configured." },
        { status: 500 }
      );
    }

    if (!isValidEmail(smtp.user) || !toEmails.every(isValidEmail) || !isValidEmail(fromEmail)) {
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
      return NextResponse.json(
        { ok: false, error: "Message could not be sent right now. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, message: "Thanks. Your message has been sent successfully." });
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }
}
