require("dotenv").config();

const accountSid = process.env.TWILIO_SID;
const token = process.env.TWILIO_TOKEN;

import client = require("twilio");
const twilio = client(accountSid, token);

export const sendMessage = (number: string, message: string) => {
  if (!(number && message)) return;

  // Sending message
  twilio.messages.create({
    from: "whatsapp:+14155238886",
    to: `whatsapp:+${number}`,
    body: message,
  });
};
