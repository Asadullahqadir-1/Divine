import { defineField, defineType } from "sanity";

export const ctaSection = defineType({
  name: "ctaSection",
  title: "CTA Section",
  type: "object",
  fields: [
    defineField({ name: "heading", title: "Heading", type: "string", validation: (rule) => rule.required().min(5) }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3, validation: (rule) => rule.required().min(20) }),
    defineField({ name: "button", title: "Button", type: "ctaButton", validation: (rule) => rule.required() }),
  ],
  preview: {
    select: { title: "heading", subtitle: "description" },
    prepare({ title, subtitle }) {
      return {
        title: title || "CTA Section",
        subtitle: subtitle?.slice(0, 70) || "No description",
      };
    },
  },
});
