import { defineConfig } from "tinacms";

// Branch Logik
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  // Ihre ID
  clientId: "0f2c73e2-5ea5-4ed7-a343-64a458ce87ae",
  // Token
  token: process.env.TINA_TOKEN || "",

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
          { type: "image", name: "src", label: "Bilddatei", required: true },
          { type: "string", name: "title", label: "Titel", required: true },
          { type: "string", name: "description", label: "Beschreibung", ui: { component: "textarea" } },
          { type: "string", name: "category", label: "Kategorie", options: ["Abstrakt", "Porträt", "Landschaft", "Skulptur", "Modern"] },
        ],
      },
      {
        name: "settings",
        label: "Seiten Einstellungen",
        path: "content/settings",
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "object", name: "intro", label: "Intro Bereich", fields: [
              { type: "string", name: "title", label: "Haupttitel" },
              { type: "string", name: "subtitle", label: "Untertitel" },
              { type: "string", name: "body", label: "Intro Text", ui: { component: "textarea" } },
              { type: "image", name: "artistImage", label: "Künstler Bild" }
            ]
          },
          {
            type: "object", name: "about", label: "Über Mich", fields: [
              { type: "string", name: "title", label: "Überschrift" },
              { type: "rich-text", name: "text", label: "Text Inhalt" },
              { type: "image", name: "image", label: "Profilbild" }
            ]
          },
          {
            type: "object", name: "contact", label: "Kontakt", fields: [
              { type: "string", name: "phone", label: "Telefon" },
              { type: "string", name: "email", label: "E-Mail" },
              { type: "string", name: "whatsapp", label: "WhatsApp" },
              { type: "string", name: "footerName", label: "Name im Footer" }
            ]
          }
        ],
      },
    ],
  },
});
