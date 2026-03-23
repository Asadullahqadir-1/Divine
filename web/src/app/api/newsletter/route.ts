import { NextResponse } from "next/server";

type NewsletterBody = {
  email?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as NewsletterBody;
    const email = body.email?.trim();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ ok: false, error: "Please provide a valid email." }, { status: 400 });
    }

    // Placeholder endpoint for frontend UX. Replace with a mailing provider integration later.
    return NextResponse.json({ ok: true, message: "Subscribed successfully." });
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }
}
