import { defineArrayMember, defineField, defineType } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  groups: [
    { name: "content", title: "Content" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Internal Title",
      type: "string",
      initialValue: "Homepage",
      readOnly: true,
      group: "content",
    }),
    defineField({
      name: "sections",
      title: "Page Sections",
      description: "Add and drag sections to control homepage flow.",
      type: "array",
      group: "content",
      initialValue: [
        {
          _type: "missionVisionSection",
          mission:
            "To equip every leader - emerging or established - with the mindset tools, strategies, and courage to navigate complexity with clarity, inclusion and create lasting impact.",
          vision:
            "A world where leaders lead from the inside out grounded in purpose, powered by resilience, and guided by authentic human values.",
        },
        {
          _type: "ctaSection",
          heading: "MENTORSHIP & LEARNING",
          description: "Courses, Workshops & Mentorship. To be created.",
          button: {
            _type: "ctaButton",
            text: "Apply for Mentorship",
            link: "/mentorship-learning",
            openInNewTab: false,
          },
        },
      ],
      of: [
        defineArrayMember({ type: "heroSection" }),
        defineArrayMember({ type: "missionVisionSection" }),
        defineArrayMember({ type: "aboutPreviewSection" }),
        defineArrayMember({ type: "servicesSection" }),
        defineArrayMember({ type: "booksPreviewSection" }),
        defineArrayMember({ type: "ctaSection" }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({ name: "seo", title: "SEO", type: "seo", group: "seo", validation: (rule) => rule.required() }),
  ],
  preview: {
    prepare() {
      return { title: "Home Page", subtitle: "Singleton" };
    },
  },
});
