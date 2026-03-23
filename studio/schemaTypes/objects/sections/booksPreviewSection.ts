import { defineArrayMember, defineField, defineType } from "sanity";

export const booksPreviewSection = defineType({
  name: "booksPreviewSection",
  title: "Books Preview Section",
  type: "object",
  fields: [
    defineField({
      name: "mode",
      title: "Display Mode",
      type: "string",
      options: {
        list: [
          { title: "Featured Books", value: "featured" },
          { title: "Choose Specific Books", value: "manual" },
        ],
      },
      initialValue: "featured",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "books",
      title: "Books",
      type: "array",
      hidden: ({ parent }) => parent?.mode !== "manual",
      of: [defineArrayMember({ type: "reference", to: [{ type: "book" }] })],
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = context.parent as { mode?: string } | undefined;
          if (parent?.mode === "manual" && (!value || value.length === 0)) {
            return "Select at least one book.";
          }
          return true;
        }),
    }),
  ],
  preview: {
    select: { mode: "mode" },
    prepare({ mode }) {
      return {
        title: "Books Preview Section",
        subtitle: mode === "manual" ? "Manual selection" : "Featured books",
      };
    },
  },
});
