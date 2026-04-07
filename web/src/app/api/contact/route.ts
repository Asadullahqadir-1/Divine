import { NextResponse } from "next/server";
import { Resend } from "resend";

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

const resendApiKey = process.env.RESEND_API_KEY?.trim() || "";
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function GET() {
  const toEmails = parseRecipientEmails(process.env.CONTACT_TO_EMAIL?.trim() || "");
  const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim() || "";

  return NextResponse.json({
    ok: true,
    service: "resend",
    configured: Boolean(resend && toEmails.length > 0 && fromEmail),
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

    if (!resend || toEmails.length === 0 || !fromEmail) {
      return NextResponse.json(
        { ok: false, error: "Email delivery is not configured." },
        { status: 500 }
      );
    }

    if (!toEmails.every(isValidEmail) || !isValidEmail(fromEmail)) {
      return NextResponse.json(
        { ok: false, error: "Email delivery is misconfigured. Please check sender and recipient addresses." },
        { status: 500 }
      );
    }

    const safeName = name.replace(/[\r\n]/g, " ");
    const safeEmail = email.replace(/[\r\n]/g, " ");
    const safeMessage = message.replace(/\r\n/g, "\n").trim();

    try {
      const { error } = await resend.emails.send({
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

      if (error) {
        const reason = `${error.name || ""} ${error.message || ""}`.toLowerCase();
        const isRecipientIssue =
          reason.includes("recipient") ||
          reason.includes("mailbox") ||
          reason.includes("not found") ||
          reason.includes("unknown user") ||
          reason.includes("suppression") ||
          reason.includes("suppressed");

        console.error("Resend rejected contact email", {
          name: error.name,
          message: error.message,
        });

        return NextResponse.json(
          {
            ok: false,
            error: isRecipientIssue
              ? "Message could not be delivered to the configured inbox. Please update CONTACT_TO_EMAIL."
              : "Email provider rejected the message. Check sender domain verification.",
          },
          { status: 500 }
        );
      }
    } catch (error) {
      console.error("Contact email send failed", error);
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
