import { defineField, defineType } from "sanity";

export const contactSettings = defineType({
  name: "contactSettings",
  title: "Contact Settings",
  type: "document",
  fields: [
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
      initialValue: "+971526981013",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      initialValue: "div@theleadersmindset.net",
      validation: (rule) => rule.required().email(),
    }),
    defineField({
      name: "address",
      title: "Address (Optional)",
      type: "string",
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [{ type: "socialLink" }],
      initialValue: [
        { _type: "socialLink", platform: "LinkedIn", value: "https://www.linkedin.com/in/divine-besong-eya-84b41622b/" },
        { _type: "socialLink", platform: "Instagram", value: "https://www.instagram.com/dibeseya" },
        { _type: "socialLink", platform: "TikTok", value: "https://www.tiktok.com/@besongeya" },
        { _type: "socialLink", platform: "Facebook", value: "https://www.facebook.com/Di%20Bes" },
      ],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    prepare() {
      return { title: "Contact Settings", subtitle: "Singleton" };
    },
  },
});
