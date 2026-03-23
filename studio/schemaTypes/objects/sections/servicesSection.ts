import { defineArrayMember, defineField, defineType } from "sanity";

export const servicesSection = defineType({
  name: "servicesSection",
  title: "Services Section",
  type: "object",
  fields: [
    defineField({
      name: "source",
      title: "Services Source",
      type: "string",
      options: { list: [{ title: "Select Existing Services", value: "linked" }, { title: "Manual Items", value: "manual" }] },
      initialValue: "linked",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      hidden: ({ parent }) => parent?.source !== "linked",
      of: [defineArrayMember({ type: "reference", to: [{ type: "service" }] })],
      validation: (rule) => rule.custom((value, context) => {
        const parent = context.parent as { source?: string } | undefined;
        if (parent?.source === "linked" && (!value || value.length === 0)) return "Select at least one service.";
        return true;
      }),
    }),
    defineField({
      name: "manualItems",
      title: "Manual Service Cards",
      type: "array",
      hidden: ({ parent }) => parent?.source !== "manual",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3, validation: (rule) => rule.required() }),
            defineField({ name: "ctaText", title: "CTA Text", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "ctaLink", title: "CTA Link", type: "string", validation: (rule) => rule.required() }),
          ],
          preview: {
            select: { title: "title", subtitle: "ctaText" },
          },
        }),
      ],
      validation: (rule) => rule.custom((value, context) => {
        const parent = context.parent as { source?: string } | undefined;
        if (parent?.source === "manual" && (!value || value.length === 0)) return "Add at least one manual service card.";
        return true;
      }),
    }),
  ],
  preview: {
    select: { source: "source" },
    prepare({ source }) {
      return {
        title: "Services Section",
        subtitle: source === "manual" ? "Manual cards" : "Linked services",
      };
    },
  },
});
