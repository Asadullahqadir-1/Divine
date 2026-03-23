import { defineField, defineType } from "sanity";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  groups: [
    { name: "content", title: "Content" },
    { name: "background", title: "Professional Background" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      name: "fullBiography",
      title: "Full Biography",
      type: "portableText",
      group: "content",
      initialValue: [
        {
          _type: "block",
          style: "normal",
          children: [
            {
              _type: "span",
              text:
                "Divine Besong Eya is a published eBooks author, MBA candidate specializing in Risk Management, leadership coach, and expert in leading diverse teams with purpose, clarity, and inclusion.",
            },
          ],
        },
        {
          _type: "block",
          style: "normal",
          children: [
            {
              _type: "span",
              text:
                "His work bridges the gap between professional excellence and personal empowerment helping individuals and organizations navigate uncertainty, build cohesive teams, and lead with integrity in a rapidly changing world.",
            },
          ],
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Profile Image",
      type: "image",
      group: "content",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          validation: (rule) => rule.required().min(5),
        }),
      ],
    }),
    defineField({
      name: "keyHighlights",
      title: "Key Highlights",
      description: "Short impact points shown as bullets.",
      type: "array",
      group: "content",
      of: [{ type: "string" }],
      initialValue: [
        "Strategic foresight and crisis navigation for organizations and individuals.",
        "Building workplaces where every voice leads and every talent thrives.",
        "Four books spanning leadership, resilience, and human transformation.",
      ],
      validation: (rule) => rule.required().min(3),
    }),
    defineField({
      name: "leadershipPhilosophy",
      title: "Leadership Philosophy",
      type: "text",
      rows: 4,
      group: "content",
      validation: (rule) => rule.required().min(40),
    }),
    defineField({
      name: "isMbaCandidate",
      title: "MBA Candidate",
      type: "boolean",
      initialValue: true,
      group: "background",
    }),
    defineField({
      name: "specialization",
      title: "Specialization",
      type: "string",
      initialValue: "Risk Management",
      group: "background",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "focusAreas",
      title: "Focus Areas",
      type: "array",
      group: "background",
      of: [{ type: "string" }],
      initialValue: ["Impact", "Resilience", "Inclusion"],
      validation: (rule) => rule.required().min(3),
    }),
    defineField({ name: "seo", title: "SEO", type: "seo", group: "seo", validation: (rule) => rule.required() }),
  ],
  preview: {
    prepare() {
      return { title: "About Page", subtitle: "Singleton" };
    },
  },
});
