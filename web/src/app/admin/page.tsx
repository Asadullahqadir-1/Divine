import { redirect } from "next/navigation";
import { Container } from "@/components/Container";
import { AdminBooksManager } from "@/components/admin/AdminBooksManager";
import { hasAdminAuthConfig, isAdminAuthenticated } from "@/lib/auth";

export const metadata = {
  title: "Admin Books | Divine Besong Eya",
};

export default async function AdminPage() {
  if (!hasAdminAuthConfig()) {
    return (
      <Container className="py-20">
        <div className="mx-auto max-w-2xl rounded-2xl border border-amber-300 bg-amber-50 p-6">
          <h1 className="font-display text-4xl text-navy">Admin setup required</h1>
          <p className="mt-3 text-sm text-ink/80">
            Set ADMIN_PASSWORD and ADMIN_SESSION_SECRET in your environment before using the admin panel.
          </p>
        </div>
      </Container>
    );
  }

  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }

  return (
    <Container className="py-14">
      <div className="mb-8">
        <h1 className="font-display text-4xl text-navy">Books Admin</h1>
        <p className="mt-2 text-sm text-ink/75">Create, edit, and delete book products published on your website.</p>
      </div>
      <AdminBooksManager />
    </Container>
  );
}
