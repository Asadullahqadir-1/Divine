import { defineField, defineType } from "sanity";

export const heroSection = defineType({
  name: "heroSection",
  title: "Hero Section",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required().min(10) }),
    defineField({ name: "subtitle", title: "Subtitle", type: "text", rows: 3, validation: (rule) => rule.required().min(20) }),
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
      fields: [
        defineField({ name: "alt", title: "Alt Text", type: "string", validation: (rule) => rule.required().min(5) }),
      ],
    }),
    defineField({ name: "cta", title: "Primary CTA", type: "ctaButton", validation: (rule) => rule.required() }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
      media: "backgroundImage",
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || "Hero Section",
        subtitle: subtitle ? subtitle.slice(0, 60) : "No subtitle",
        media,
      };
    },
  },
});
