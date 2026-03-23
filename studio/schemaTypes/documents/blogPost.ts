import { defineField, defineType } from "sanity";

export const blogPost = defineType({
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required().min(8) }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
      fields: [defineField({ name: "alt", title: "Alt Text", type: "string", validation: (rule) => rule.required() })],
    }),
    defineField({ name: "content", title: "Content", type: "portableText", validation: (rule) => rule.required() }),
    defineField({ name: "author", title: "Author", type: "string", initialValue: "Divine Besong Eya", validation: (rule) => rule.required() }),
    defineField({ name: "publishedAt", title: "Published Date", type: "datetime", validation: (rule) => rule.required() }),
    defineField({ name: "seo", title: "SEO", type: "seo", validation: (rule) => rule.required() }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "author",
      date: "publishedAt",
      media: "featuredImage",
    },
    prepare({ title, subtitle, date, media }) {
      const formattedDate = date ? new Date(date).toLocaleDateString() : "No date";
      return {
        title,
        subtitle: `${subtitle} | ${formattedDate}`,
        media,
      };
    },
  },
});
