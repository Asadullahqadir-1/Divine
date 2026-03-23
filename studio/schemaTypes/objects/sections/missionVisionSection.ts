import { defineField, defineType } from "sanity";

export const missionVisionSection = defineType({
  name: "missionVisionSection",
  title: "Mission and Vision Section",
  type: "object",
  fields: [
    defineField({ name: "mission", title: "Mission", type: "text", rows: 4, validation: (rule) => rule.required().min(20) }),
    defineField({ name: "vision", title: "Vision", type: "text", rows: 4, validation: (rule) => rule.required().min(20) }),
  ],
  preview: {
    select: {
      mission: "mission",
      vision: "vision",
    },
    prepare({ mission, vision }) {
      return {
        title: "Mission and Vision",
        subtitle: `${(mission || "").slice(0, 35)} | ${(vision || "").slice(0, 35)}`,
      };
    },
  },
});
