export function ContactForm() {
  return (
    <form className="grid gap-4 border border-black/10 bg-white p-6 sm:p-7" action="/api/contact" method="post">
      <div>
        <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-ink/70">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="h-11 w-full border border-black/20 bg-white px-3 text-sm focus:border-gold focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-ink/70">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="h-11 w-full border border-black/20 bg-white px-3 text-sm focus:border-gold focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-ink/70">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full border border-black/20 bg-white px-3 py-2 text-sm focus:border-gold focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="btn-live h-11 bg-ink px-6 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-gold"
      >
        Send Message
      </button>

      <div className="flex flex-wrap gap-3">
        <a
          href="mailto:eyadivinebesong58@gmail.com"
          className="border border-ink px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-ink transition hover:border-gold hover:text-gold"
        >
          Email Directly
        </a>
        <a
          href="https://wa.me/971526981013"
          target="_blank"
          rel="noreferrer"
          className="border border-black/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-ink/80 transition hover:border-gold hover:text-gold"
        >
          WhatsApp
        </a>
      </div>
    </form>
  );
}
