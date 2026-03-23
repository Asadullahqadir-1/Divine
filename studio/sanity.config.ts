import { HomeIcon, DocumentTextIcon, BookIcon, BulbOutlineIcon, ComposeIcon, ControlsIcon, CogIcon } from "@sanity/icons";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";
import { structure } from "./structure";

const singletonTypes = new Set(["homePage", "aboutPage", "contactSettings", "siteSettings"]);

export default defineConfig({
  name: "default",
  title: "Divine Besong Eya CMS",
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || "YOUR_PROJECT_ID",
  dataset: process.env.SANITY_STUDIO_DATASET || "production",
  apiVersion: process.env.SANITY_STUDIO_API_VERSION || "2026-03-23",
  basePath: "/",
  plugins: [
    structureTool({ structure }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
    templates: (templates) => templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
    actions: (prev, context) => {
      if (singletonTypes.has(context.schemaType)) {
        return prev.filter(({ action }) => action !== "duplicate" && action !== "unpublish");
      }

      return prev;
    },
  },
  icons: {
    home: HomeIcon,
    document: DocumentTextIcon,
    book: BookIcon,
    learning: BulbOutlineIcon,
    services: ControlsIcon,
    blog: ComposeIcon,
    settings: CogIcon,
  },
});
