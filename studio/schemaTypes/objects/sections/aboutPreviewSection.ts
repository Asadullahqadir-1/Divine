import { defineField, defineType } from "sanity";

export const aboutPreviewSection = defineType({
  name: "aboutPreviewSection",
  title: "About Preview Section",
  type: "object",
  fields: [
    defineField({ name: "summary", title: "Summary", type: "text", rows: 4, validation: (rule) => rule.required().min(40) }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
      fields: [defineField({ name: "alt", title: "Alt Text", type: "string", validation: (rule) => rule.required() })],
    }),
    defineField({ name: "cta", title: "CTA", type: "ctaButton", validation: (rule) => rule.required() }),
  ],
  preview: {
    select: { summary: "summary", media: "image" },
    prepare({ summary, media }) {
      return {
        title: "About Preview",
        subtitle: summary?.slice(0, 70) || "No summary",
        media,
      };
    },
  },
});
