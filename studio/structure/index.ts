import { BookIcon, BulbOutlineIcon, CogIcon, ComposeIcon, ControlsIcon, DocumentTextIcon, HomeIcon } from "@sanity/icons";
import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Home Page")
        .icon(HomeIcon)
        .child(S.document().schemaType("homePage").documentId("homePage")),
      S.listItem()
        .title("About")
        .icon(DocumentTextIcon)
        .child(S.document().schemaType("aboutPage").documentId("aboutPage")),
      S.divider(),
      S.documentTypeListItem("book").title("Books").icon(BookIcon),
      S.documentTypeListItem("service").title("Services").icon(ControlsIcon),
      S.documentTypeListItem("mentorshipProgram").title("Mentorship").icon(BulbOutlineIcon),
      S.documentTypeListItem("blogPost").title("Blog").icon(ComposeIcon),
      S.divider(),
      S.listItem()
        .title("Contact Settings")
        .icon(DocumentTextIcon)
        .child(S.document().schemaType("contactSettings").documentId("contactSettings")),
      S.listItem()
        .title("Site Settings")
        .icon(CogIcon)
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
    ]);
