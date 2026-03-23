import { defineField, defineType } from "sanity";

export const ctaButton = defineType({
  name: "ctaButton",
  title: "CTA Button",
  type: "object",
  fields: [
    defineField({
      name: "text",
      title: "Button Text",
      type: "string",
      validation: (rule) => rule.required().min(2),
    }),
    defineField({
      name: "link",
      title: "Button Link",
      type: "url",
      validation: (rule) => rule.required().uri({ allowRelative: true }),
    }),
    defineField({
      name: "openInNewTab",
      title: "Open in New Tab",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "text",
      subtitle: "link",
    },
  },
});
