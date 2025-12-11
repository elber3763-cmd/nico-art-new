import { defineConfig } from "tinacms";

const branch = "main";

export default defineConfig({
  branch,
  // HIER IHRE ID VOM DASHBOARD EINFÜGEN
  clientId: "HIER_DIE_CLIENT_ID",
  // HIER IHR TOKEN VOM DASHBOARD EINFÜGEN
  token: "HIER_DAS_TOKEN",

  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      mediaRoot: "bilder/uploads",
      publicFolder: "./",
    },
  },
  schema: {
    collections: [
      {
        name: "gallery",
        label: "Galerie",
        path: "content/gallery",
        format: "json",
        fields: [
          { type: "image", name: "src", label: "Bild" },
          { type: "string", name: "title", label: "Titel" }
        ],
      },
      {
        name: "settings",
        label: "Einstellungen",
        path: "content/settings",
        format: "json",
        fields: [
          { type: "string", name: "title", label: "Seitentitel" }
        ]
      }
    ],
  },
});
