import { Router, Request, Response } from "express";
import auth from "./auth";
import store from "./store";
import trucker from "./trucker";
import whatsapp from './whatsapp';
import HealthController from "../controllers/HealthController";

const routes = Router();

routes.get("/", HealthController.getHealth);
routes.use("/auth", auth);
routes.use("/store", store);
routes.use("/trucker", trucker);
routes.use("/whats", whatsapp)

export default routes;
