import { NextResponse } from "next/server";
import { createAdminSession, hasAdminAuthConfig, validateAdminPassword } from "@/lib/auth";

type LoginPayload = {
  password?: string;
};

export async function POST(request: Request) {
  if (!hasAdminAuthConfig()) {
    return NextResponse.json(
      { error: "Admin login is not configured. Set ADMIN_PASSWORD and ADMIN_SESSION_SECRET." },
      { status: 500 }
    );
  }

  let body: LoginPayload;
  try {
    body = (await request.json()) as LoginPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const password = body.password?.trim();
  if (!password) {
    return NextResponse.json({ error: "Password is required." }, { status: 400 });
  }

  if (!validateAdminPassword(password)) {
    return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
  }

  await createAdminSession();
  return NextResponse.json({ ok: true });
}
