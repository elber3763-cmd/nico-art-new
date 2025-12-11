const { defineConfig } = require("tinacms");

module.exports = defineConfig({
  // 1. Branch fest eintragen
  branch: "main",

  // 2. Client ID fest eintragen (Ihre ID vom Projekt!)
  clientId: "5b001291-6215-4877-b8de-246afdb97074",

  // 3. Token fest eintragen (Das kopierte Token!)
  // Das ist der entscheidende Fix für den Scanner!
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
