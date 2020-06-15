import { Request, Response } from "express";

class HealthController {
  static getHealth = (req: Request, res: Response) => {
    const now: Date = new Date();
    const checkHour: string = `${now.getHours()}:${now.getMinutes()}`;
    res.send({ status: "UP", checkTime: checkHour });
  };
}

export default HealthController;
