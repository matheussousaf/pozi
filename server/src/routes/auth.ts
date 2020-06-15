import { Router } from "express";
import AuthController from "../controllers/User/AuthController";
import { checkJwt } from "../middlewares/checkJwt";

const router = Router();

router.post("/login/trucker", AuthController.loginTrucker);
router.post("/login/store", AuthController.loginStore);
router.post("/change-password", [checkJwt], AuthController.changePassword);

export default router;
