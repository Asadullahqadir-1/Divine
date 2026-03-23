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

function getSmtpConfig() {
  const host = process.env.SMTP_HOST?.trim() || "";
  const port = Number(process.env.SMTP_PORT || "587");
  const user = process.env.SMTP_USER?.trim() || "";
  const pass = process.env.SMTP_PASS?.trim() || "";
  const secure = String(process.env.SMTP_SECURE || "false") === "true";

  if (!host || !user || !pass || Number.isNaN(port)) {
    return null;
  }

  return { host, port, user, pass, secure };
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

    const toEmail = process.env.CONTACT_TO_EMAIL?.trim() || "";
    const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim() || "";
    const smtpConfig = getSmtpConfig();

    if (!smtpConfig || !toEmail || !fromEmail) {
      // Keep local/dev flow functional even when SMTP is not configured yet.
      return NextResponse.json({
        ok: true,
        message: "Message received. Email delivery is not configured yet.",
      });
    }

    const transporter = nodemailer.createTransport({
      host: smtpConfig.host,
      port: smtpConfig.port,
      secure: smtpConfig.secure,
      auth: {
        user: smtpConfig.user,
        pass: smtpConfig.pass,
      },
    });

    const safeName = name.replace(/[\r\n]/g, " ");
    const safeEmail = email.replace(/[\r\n]/g, " ");
    const safeMessage = message.replace(/\r\n/g, "\n").trim();

    try {
      await transporter.sendMail({
        from: fromEmail,
        to: toEmail,
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
    } catch {
      return NextResponse.json({
        ok: true,
        message: "Message received. Email delivery is temporarily unavailable.",
      });
    }

    return NextResponse.json({ ok: true, message: "Thanks. Your message has been sent successfully." });
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }
}
