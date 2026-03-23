import { defineArrayMember, defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  groups: [
    { name: "branding", title: "Branding" },
    { name: "navigation", title: "Navigation" },
    { name: "footer", title: "Footer" },
    { name: "seo", title: "SEO Defaults" },
  ],
  fields: [
    defineField({
      name: "siteTitle",
      title: "Site Title",
      type: "string",
      initialValue: "Divine Besong Eya",
      validation: (rule) => rule.required(),
      group: "branding",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
      group: "branding",
      fields: [defineField({ name: "alt", title: "Alt Text", type: "string" })],
    }),
    defineField({
      name: "navbarLinks",
      title: "Navbar Links",
      description: "Control menu order by dragging items.",
      type: "array",
      group: "navigation",
      of: [defineArrayMember({ type: "navLink" })],
      initialValue: [
        { _type: "navLink", label: "Home", href: "/" },
        { _type: "navLink", label: "About", href: "/about" },
        { _type: "navLink", label: "Books", href: "/books" },
        { _type: "navLink", label: "Mentorship", href: "/mentorship-learning" },
        { _type: "navLink", label: "Services", href: "/services" },
        { _type: "navLink", label: "Contact", href: "/contact" },
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "footerContent",
      title: "Footer Content",
      type: "text",
      rows: 3,
      group: "footer",
      initialValue: "Leadership coaching, mentorship, and transformational guidance by Divine Besong Eya.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "referenceWebsites",
      title: "Reference Websites",
      description: "Brand inspiration links for design/content direction.",
      type: "array",
      group: "branding",
      of: [{ type: "url" }],
      initialValue: ["https://danthurmon.com/", "https://brittanyhodak.com/"],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "seoDefaults",
      title: "SEO Defaults",
      type: "seo",
      group: "seo",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site Settings", subtitle: "Singleton" };
    },
  },
});
