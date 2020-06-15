import { sendMessage } from "../services/WhatsApp";
import { Request, Response } from "express";
import { getResponse } from "../services/NaturalLanguageProcessing";
const MessagingResponse = require("twilio").twiml.MessagingResponse;

class WhatsappController {
  static sendMessage = (req: Request, res: Response) => {
    const { number, message } = req.body;
    sendMessage(number, message);
    res.send({ message: `Message: ${message}` });
  };

  static receiveMessage = async (req: Request, res: Response) => {
    const twiml = new MessagingResponse();

    console.log(`Incoming message from ${req.body.From}: ${req.body.Body}`);

    const message = req.body.Body;

    const response = await getResponse(message);

    twiml.message(response);
    res.writeHead(200, { "Content-Type": "text/xml" });
    res.end(twiml.toString());
  };
}

export default WhatsappController;
