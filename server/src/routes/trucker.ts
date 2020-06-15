import { Router } from "express";
import TruckerController from "../controllers/User/TruckerController";
import { checkJwt } from "../middlewares/checkJwt";

const router = Router();

router.get("/", [checkJwt], TruckerController.list);
router.get("/:id([0-9]+)", TruckerController.index);
router.post("/", TruckerController.create);
router.patch("/:id([0-9]+)", [checkJwt], TruckerController.edit);
router.delete("/:id([0-9]+)", [checkJwt], TruckerController.delete);

export default router;
