import { defineConfig } from "tinacms";

// Ermittelt den aktuellen Branch für den Build (Fallback auf 'main')
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  // WICHTIG: Hier werden die Secrets eingelesen, die den Fehler beheben
  clientId: process.env.TINA_PUBLIC_CLIENT_ID, 
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "./", // Root-Verzeichnis für statische HTML Projekte
  },
  media: {
    tina: {
      mediaRoot: "bilder/uploads",
      publicFolder: "./",
    },
  },
  schema: {
    collections: [
      // 1. Kollektion: Galerie Bilder
      {
        name: "gallery",
        label: "Galerie",
        path: "content/gallery",
        format: "json",
        fields: [
          {
            type: "image",
            name: "src",
            label: "Bilddatei",
            required: true,
          },
          {
            type: "string",
            name: "title",
            label: "Titel",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Beschreibung",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "category",
            label: "Kategorie",
            options: ["Abstrakt", "Porträt", "Landschaft", "Skulptur", "Modern"],
          },
        ],
      },
      // 2. Kollektion: Globale Seiteneinstellungen (Texte, Kontakte)
      {
        name: "settings",
        label: "Seiten Einstellungen",
        path: "content/settings",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          // Intro Bereich
          {
            type: "object",
            name: "intro",
            label: "Intro Bereich",
            fields: [
              { type: "string", name: "title", label: "Haupttitel (Willkommen)" },
              { type: "string", name: "subtitle", label: "Untertitel" },
              { type: "string", name: "body", label: "Intro Text", ui: { component: "textarea" } },
              { type: "image", name: "artistImage", label: "Künstler Bild" }
            ]
          },
          // Über Mich Bereich
          {
            type: "object",
            name: "about",
            label: "Über Mich",
            fields: [
              { type: "string", name: "title", label: "Überschrift" },
              { type: "rich-text", name: "text", label: "Text Inhalt" },
              { type: "image", name: "image", label: "Profilbild" }
            ]
          },
          // Kontakt & Footer
          {
            type: "object",
            name: "contact",
            label: "Kontakt & Footer",
            fields: [
              { type: "string", name: "phone", label: "Telefonnummer" },
              { type: "string", name: "email", label: "E-Mail Adresse" },
              { type: "string", name: "whatsapp", label: "WhatsApp Nummer" },
              { type: "string", name: "footerName", label: "Name im Footer" }
            ]
          }
        ],
      },
    ],
  },
});
