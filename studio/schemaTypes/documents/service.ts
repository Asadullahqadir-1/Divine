import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "description", title: "Description", type: "text", rows: 4, validation: (rule) => rule.required().min(20) }),
    defineField({
      name: "iconOrImage",
      title: "Icon or Image",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt Text", type: "string" })],
    }),
    defineField({ name: "ctaText", title: "CTA Text", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "ctaLink", title: "CTA Link", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "seo", title: "SEO", type: "seo", validation: (rule) => rule.required() }),
  ],
  preview: {
    select: { title: "title", subtitle: "ctaText", media: "iconOrImage" },
  },
});
