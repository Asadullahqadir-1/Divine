import { defineField, defineType } from "sanity";

export const book = defineType({
  name: "book",
  title: "Book",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "portableText",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
      fields: [
        defineField({ name: "alt", title: "Alt Text", type: "string", validation: (rule) => rule.required() }),
      ],
    }),
    defineField({
      name: "externalLink",
      title: "Buy/Learn More Link",
      type: "url",
      validation: (rule) => rule.required().uri({ allowRelative: false }),
    }),
    defineField({ name: "featured", title: "Featured", type: "boolean", initialValue: false }),
    defineField({ name: "seo", title: "SEO", type: "seo", validation: (rule) => rule.required() }),
  ],
  preview: {
    select: {
      title: "title",
      media: "coverImage",
      featured: "featured",
    },
    prepare({ title, media, featured }) {
      return {
        title,
        subtitle: featured ? "Featured book" : "Book",
        media,
      };
    },
  },
});
