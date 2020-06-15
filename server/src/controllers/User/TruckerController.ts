import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { validate } from "class-validator";

import { Trucker } from "../../entity/Trucker";

class TruckerController {
  static list = async (req: Request, res: Response) => {
    const truckerRepository = getRepository(Trucker);
    const truckers = await truckerRepository.find({
      select: ["id", "name", "points", "profilePicture"],
    });

    res.send(truckers);
  };

  static index = async (req: Request, res: Response) => {
    const id: number = Number(req.params.id);

    const truckerRepository = getRepository(Trucker);
    try {
      const trucker = await truckerRepository.findOneOrFail(id, {
        select: ["id", "name", "points", "profilePicture"],
      });
      res.send(trucker);
    } catch (error) {
      res.status(404).send({ response: "User not found" });
    }
  };

  static create = async (req: Request, res: Response) => {
    let { name, password, whatsappNumber, profilePicture, points } = req.body;
    let trucker = new Trucker();

    trucker.password = password;
    trucker.name = name;
    trucker.whatsappNumber = whatsappNumber;
    trucker.profilePicture = profilePicture;
    trucker.points = points ? points : 0;

    const errors = await validate(trucker);
    if (errors.length > 0) {
      res.status(400).send({ response: `Wrong Formatting: ${errors}` });
      return;
    }

    trucker.hashPassword();

    const truckerRepository = getRepository(Trucker);
    try {
      await truckerRepository.save(trucker);
    } catch (e) {
      res.status(409).send({ response: "Email already in use." });
      return;
    }

    res.status(201).send({ response: "User created." });
  };

  static edit = async (req: Request, res: Response) => {
    const id = req.params.id;

    const { name, whatsappNumber } = req.body;

    const truckerRepository = getRepository(Trucker);
    let trucker;
    try {
      trucker = await truckerRepository.findOneOrFail(id);
    } catch (error) {
      res.status(404).send({ response: "User not found" });
      return;
    }

    trucker.name = name;
    trucker.whatsappNumber = whatsappNumber;

    const errors = await validate(trucker);
    if (errors.length > 0) {
      res.status(400).send({ response: `Wrong Formatting: ${errors}` });
      return;
    }

    try {
      await truckerRepository.save(trucker);
    } catch (e) {
      res.status(409).send({ response: "Email already in use" });
      return;
    }

    res.status(204).send();
  };

  static delete = async (req: Request, res: Response) => {
    const id = req.params.id;

    const truckerRepository = getRepository(Trucker);
    let trucker: Trucker;
    try {
      trucker = await truckerRepository.findOneOrFail(id);
    } catch (error) {
      res.status(404).send({ response: "User not found" });
      return;
    }
    truckerRepository.delete(id);

    res.status(204).send();
  };
}

export default TruckerController;
