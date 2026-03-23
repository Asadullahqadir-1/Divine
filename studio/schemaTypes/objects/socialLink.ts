import { defineField, defineType } from "sanity";

export const socialLink = defineType({
  name: "socialLink",
  title: "Social Link",
  type: "object",
  fields: [
    defineField({
      name: "platform",
      title: "Platform",
      type: "string",
      options: {
        list: ["LinkedIn", "Instagram", "TikTok", "Facebook"],
        layout: "dropdown",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "value",
      title: "URL or Handle",
      type: "string",
      description: "Use full URL (e.g. LinkedIn) or handle/name (e.g. @dibeseya, Di Bes).",
      validation: (rule) => rule.required().min(2),
    }),
  ],
  preview: {
    select: {
      title: "platform",
      subtitle: "value",
    },
  },
});
