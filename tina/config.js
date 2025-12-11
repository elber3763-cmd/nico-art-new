const { defineConfig } = require("tinacms");

module.exports = defineConfig({
  branch: "main",
  
  // HIER IHRE CLIENT ID
  clientId: "5b001291-6215-4877-b8de-246afdb97074",
  
  // HIER IHR TOKEN
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
  // Wir testen mit einer leeren Collection-Liste, um Schema-Fehler auszuschließen
  schema: {
    collections: [
      {
        name: "test",
        label: "Test",
        path: "content/test",
        fields: [
           { type: "string", name: "title", label: "Title" }
        ]
      }
    ],
  },
});
