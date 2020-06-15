import { Router } from "express";
import StoreController from "../controllers/Store/StoreController";
import { checkJwt } from "../middlewares/checkJwt";

const router = Router();

router.get("/", [checkJwt], StoreController.list);
router.get("/:id([0-9]+)", StoreController.index);
router.post("/", StoreController.create);
router.patch("/:id([0-9]+)", [checkJwt], StoreController.edit);
router.delete("/:id([0-9]+)", [checkJwt], StoreController.delete);
router.post("/comment", [checkJwt], StoreController.addComment);

export default router;
