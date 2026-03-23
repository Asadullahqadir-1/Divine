import { redirect } from "next/navigation";
import { Container } from "@/components/Container";
import { AdminLoginForm } from "@/components/admin/AdminLoginForm";
import { isAdminAuthenticated } from "@/lib/auth";

export const metadata = {
  title: "Admin Login | Divine Besong Eya",
};

export default async function AdminLoginPage() {
  if (await isAdminAuthenticated()) {
    redirect("/admin");
  }

  return (
    <Container className="py-20">
      <div className="mx-auto max-w-md">
        <h1 className="font-display text-4xl text-navy">Owner Admin</h1>
        <p className="mt-2 text-sm text-ink/75">Sign in to manage books on the website.</p>
        <div className="mt-6">
          <AdminLoginForm />
        </div>
      </div>
    </Container>
  );
}
