import { defineConfig } from "tinacms";

const branch = "main";

export default defineConfig({
  branch,
  // HIER IHRE ID VOM DASHBOARD
  clientId: "5b001291-6215-4877-b8de-246afdb97074",
  // HIER IHR TOKEN VOM DASHBOARD
  token: "c291c3765c7b903671f4dbe9f1194a1284fa430b",

  build: {
    outputFolder: "admin",
    publicFolder: "public", // Wir lassen das auf 'public', da der Ordner existiert
  },
  // WIR HABEN DEN MEDIA BLOCK ENTFERNT (Fehlerquelle ausschließen)
  schema: {
    collections: [
      // Eine ganz einfache Test-Collection
      {
        name: "test",
        label: "Test",
        path: "content/test",
        format: "json",
        fields: [
          { type: "string", name: "title", label: "Titel" }
        ],
      }
    ],
  },
});
