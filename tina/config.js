const { defineConfig } = require("tinacms");

// Fester Branch
const branch = "main";

module.exports = defineConfig({
  branch,
  
  // HIER IHRE CLIENT ID VOM DASHBOARD (Prüfen Sie, ob es die 5b00... ist!)
  clientId: "HIER_DIE_CLIENT_ID_EINFUEGEN",
  
  // HIER IHR TOKEN VOM DASHBOARD
  token: "HIER_DAS_TOKEN_EINFUEGEN",

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
