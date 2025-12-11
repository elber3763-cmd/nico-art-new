import { defineConfig } from "tinacms";

// KEIN process.env mehr! Wir schreiben es hart rein.
const branch = "main";

export default defineConfig({
  branch,
  
  // HIER IHRE ID VOM DASHBOARD EINFÜGEN
  clientId: "5b001291-6215-4877-b8de-246afdb97074",
  
  // HIER IHR TOKEN VOM DASHBOARD EINFÜGEN
  token: "c291c3765c7b903671f4dbe9f1194a1284fa430b",

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
