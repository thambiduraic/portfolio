/* global process */
export default async function handler(req, res) {
  // Set CORS headers for local testing or cross-domain requests
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    res.status(400).json({ error: 'Missing required fields: name, email, or message.' });
    return;
  }

  // Get Telegram credentials securely from environment variables
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    res.status(500).json({ error: 'Telegram credentials are not configured on the server.' });
    return;
  }

  const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage`;
  const text = `📬 *New Portfolio Message*\n\n👤 *Name:* ${name}\n📧 *Email:* ${email}\n\n💬 *Message:*\n${message}`;

  try {
    const telegramResponse = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: 'Markdown'
      })
    });

    if (telegramResponse.ok) {
      res.status(200).json({ success: true, message: 'Message sent successfully.' });
    } else {
      const errorData = await telegramResponse.json();
      res.status(502).json({ error: 'Failed to send message to Telegram.', details: errorData });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error while transmitting message.', details: error.message });
  }
}
