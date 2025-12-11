import { defineConfig } from "tinacms";

const branch = "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin-tina",
    publicFolder: "",
  },

  media: {
    tina: {
      mediaRoot: "bilder/uploads",
      publicFolder: "",
    },
  },

  schema: {
    collections: [
      {
        name: "content",
        label: "Seiteninhalt",
        path: "",
        format: "json",
        
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },

        match: {
          include: "inhalt",
        },

        fields: [
          // DESIGN
          {
            type: "object",
            name: "design",
            label: "🎨 Design",
            fields: [
              { type: "image", name: "site_logo", label: "Logo" },
              { type: "boolean", name: "show_logo", label: "Logo anzeigen?" },
              { type: "string", name: "logo_width", label: "Logo Breite" },
              { type: "string", name: "logo_height", label: "Logo Höhe" },
              { 
                type: "string", 
                name: "logo_alignment", 
                label: "Logo Ausrichtung",
                options: ["left", "center", "right"]
              },
              { type: "number", name: "logo_offset_x", label: "Logo X" },
              { type: "number", name: "logo_offset_y", label: "Logo Y" },
              { type: "string", name: "primary_color", label: "Primärfarbe", ui: { component: "color" } },
              { type: "string", name: "secondary_color", label: "Sekundärfarbe", ui: { component: "color" } },
              { type: "string", name: "accent_color", label: "Akzentfarbe", ui: { component: "color" } },
              { type: "string", name: "background_color", label: "Hintergrund", ui: { component: "color" } },
              {
                type: "string",
                name: "font_heading",
                label: "Font Überschrift",
                options: ["Playfair Display", "Cormorant Garamond", "Merriweather", "Libre Baskerville", "Cinzel", "Lora", "Bodoni Moda"]
              },
              {
                type: "string",
                name: "font_body",
                label: "Font Text",
                options: ["Inter", "Roboto", "Open Sans", "Lato", "Montserrat", "Raleway", "Source Sans Pro"]
              },
            ],
          },

          // INTRO
          { type: "string", name: "welcome_title", label: "👋 Intro Titel" },
          { type: "string", name: "welcome_subtitle", label: "Intro Untertitel" },
          { type: "string", name: "welcome_body", label: "Intro Text", ui: { component: "textarea" } },

          // HERO
          { type: "string", name: "heroHeadline", label: "🦸 Hero Titel" },
          { type: "string", name: "heroSubline", label: "Hero Untertitel", ui: { component: "textarea" } },
          { type: "image", name: "heroBild", label: "Hero Bild" },

          // GALERIE
          { type: "string", name: "galleryHeadline", label: "🖼️ Galerie Titel" },
          {
            type: "object",
            name: "galerieBilder",
            label: "Galerie Bilder",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.titel || "Neues Werk" }),
            },
            fields: [
              { type: "string", name: "titel", label: "Titel", required: true },
              { type: "image", name: "bild", label: "Bild", required: true },
              { type: "string", name: "beschreibung", label: "Beschreibung", ui: { component: "textarea" } },
            ],
          },

          // BIOGRAFIE
          { type: "string", name: "biografieTitel", label: "👤 Name" },
          { type: "string", name: "biografieText", label: "Biografie", ui: { component: "textarea" } },
          { type: "image", name: "kuenstlerFoto", label: "Foto" },

          // KONTAKT
          {
            type: "object",
            name: "kontakt",
            label: "📞 Kontakt",
            fields: [
              { type: "string", name: "email", label: "E-Mail" },
              { type: "string", name: "telefon", label: "Telefon" },
              { type: "string", name: "chatText", label: "WhatsApp Text" },
              { type: "string", name: "chatLink", label: "WhatsApp Link" },
            ],
          },

          // SOCIAL
          {
            type: "object",
            name: "social",
            label: "🔗 Social Media",
            fields: [
              { type: "string", name: "linkedin", label: "LinkedIn" },
              { type: "string", name: "facebook", label: "Facebook" },
              { type: "string", name: "instagram", label: "Instagram" },
              { type: "string", name: "tiktok", label: "TikTok" },
              { type: "string", name: "x", label: "X (Twitter)" },
            ],
          },

          // IMPRESSUM
          {
            type: "object",
            name: "impressum",
            label: "⚖️ Rechtliches",
            fields: [
              { type: "string", name: "name", label: "Name" },
              { type: "string", name: "strasse", label: "Straße" },
              { type: "string", name: "ort", label: "Ort" },
              { type: "string", name: "telefon", label: "Telefon" },
              { type: "string", name: "email", label: "E-Mail" },
              { type: "string", name: "steuer", label: "Steuernummer" },
              { type: "string", name: "privacy", label: "Datenschutz", ui: { component: "textarea" } },
              { type: "string", name: "disclaimer", label: "Haftung", ui: { component: "textarea" } },
            ],
          },

          // FOOTER
          { type: "string", name: "titel", label: "📄 Footer Name" },
        ],
      },
    ],
  },
});
