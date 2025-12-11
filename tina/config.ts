import { defineConfig } from "tinacms";

const branch = "main";

export default defineConfig({
  branch,
  // Ihre ID vom Dashboard
  clientId: "5b001291-6215-4877-b8de-246afdb97074",
  // Ihr Token vom Dashboard
  token: "c291c3765c7b903671f4dbe9f1194a1284fa430b",

  build: {
    outputFolder: "admin",
    publicFolder: ".", // Punkt für aktuelles Verzeichnis
  },
  media: {
    tina: {
      mediaRoot: "bilder/uploads",
      publicFolder: ".",
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
      }
    ],
  },
});
