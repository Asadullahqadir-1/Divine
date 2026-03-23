import { defineField, defineType } from "sanity";

export const mentorshipProgram = defineType({
  name: "mentorshipProgram",
  title: "Mentorship and Learning",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "description", title: "Description", type: "text", rows: 4, validation: (rule) => rule.required().min(20) }),
    defineField({
      name: "type",
      title: "Program Type",
      type: "string",
      options: {
        list: [
          { title: "Course", value: "course" },
          { title: "Workshop", value: "workshop" },
          { title: "1-on-1 Mentorship", value: "mentorship" },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt Text", type: "string" })],
    }),
    defineField({ name: "ctaText", title: "CTA Text", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "ctaLink", title: "CTA Link", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "seo", title: "SEO", type: "seo", validation: (rule) => rule.required() }),
  ],
  preview: {
    select: { title: "title", subtitle: "type", media: "image" },
    prepare({ title, subtitle, media }) {
      return { title, subtitle: `Type: ${subtitle}`, media };
    },
  },
});
