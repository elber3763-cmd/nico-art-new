// api/contact.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }

  try {
    // Formulardaten auslesen (HTML-Formular = application/x-www-form-urlencoded)
    const body = await req.text();
    const params = new URLSearchParams(body);
    const name = params.get('name');
    const email = params.get('email');
    const message = params.get('message');

    // Validierung: Alle Felder müssen ausgefüllt sein
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Alle Felder sind erforderlich.' });
    }

    // E-Mail über Resend senden
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: 'Kontakt <elber3763@gmail.com>', // ✅ Bestätigte Absender-E-Mail
        to: 'elber3763@gmail.com',             // 📩 Empfänger-E-Mail
        subject: `Kontaktanfrage von ${name}`,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>E-Mail:</strong> ${email}</p>
          <p><strong>Nachricht:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `
      })
    });

    // Fehler bei Resend?
    if (!response.ok) {
      const err = await response.json();
      console.error('Resend Fehler:', err);
      return res.status(500).json({ error: 'E-Mail konnte nicht gesendet werden.' });
    }

    // ✅ Alles gut → Weiterleitung zu Ihrer Danke-Seite
    return res.redirect(302, '/danke.html');

  } catch (error) {
    // Interner Server-Fehler
    console.error('Server Error:', error);
    return res.status(500).json({ error: 'Interner Fehler.' });
  }
}
