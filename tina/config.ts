import { defineConfig } from "tinacms";

const branch = "main";

export default defineConfig({
  branch,
  
  // Deine IDs vom Tina Dashboard
  clientId: "5b001291-6215-4877-b8de-246afdb97074",
  token: "c291c3765c7b903671f4dbe9f1194a1284fa430b",
  
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  
  // Media-Verwaltung (optional, falls du Bilder hochladen möchtest)
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  
  schema: {
    collections: [
      {
        name: "test",
        label: "Test",
        path: "content/test",
        format: "json",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titel",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Inhalt",
            isBody: true,
          },
        ],
      },
      // Weitere Collections kannst du hier hinzufügen
      {
        name: "posts",
        label: "Blog Posts",
        path: "content/posts",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titel",
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Datum",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Inhalt",
            isBody: true,
          },
        ],
      },
    ],
  },
});
