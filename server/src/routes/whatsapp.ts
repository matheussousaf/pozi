import { Router } from "express";
import WhatsappController from "../controllers/WhatsappController";
import { checkJwt } from "../middlewares/checkJwt";

const router = Router();

router.post("/send", WhatsappController.sendMessage);
router.post("/receive", WhatsappController.receiveMessage);

export default router;
