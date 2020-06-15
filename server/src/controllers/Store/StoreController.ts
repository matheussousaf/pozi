import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { validate } from "class-validator";

import { Store } from "../../entity/Store";
import { Comment } from "../../entity/Comment";

class StoreController {
  static list = async (req: Request, res: Response) => {
    const storeRepository = getRepository(Store);
    const stores = await storeRepository.find({
      select: [
        "id",
        "email",
        "name",
        "description",
        "profilePicture",
        "latitude",
        "longitude",
      ],
    });

    res.send(stores);
  };

  static index = async (req: Request, res: Response) => {
    const id: number = Number(req.params.id);

    const storeRepository = getRepository(Store);
    try {
      const store = await storeRepository.findOneOrFail(id, {
        select: ["id", "email", "description", "latitude", "longitude"],
      });
      res.send(store);
    } catch (error) {
      res.status(404).send({ response: "User not found" });
    }
  };

  static create = async (req: Request, res: Response) => {
    let {
      email,
      password,
      whatsappNumber,
      description,
      latitude,
      longitude,
      name,
      profilePicture,
    } = req.body;
    let store = new Store();

    store.email = email;
    store.name = name;
    store.profilePicture = profilePicture;
    store.password = password;
    store.whatsappNumber = whatsappNumber;
    store.description = description;
    store.latitude = latitude;
    store.longitude = longitude;

    const errors = await validate(store);
    if (errors.length > 0) {
      res.status(400).send({ response: `Wrong Formatting: ${errors}` });
      return;
    }

    store.hashPassword();

    const storeRepository = getRepository(Store);
    try {
      await storeRepository.save(store);
    } catch (e) {
      res.status(409).send({ response: "Email already in use." });
      return;
    }

    res.status(201).send({ response: "User created." });
  };

  static edit = async (req: Request, res: Response) => {
    const id = req.params.id;

    const { email } = req.body;

    const storeRepository = getRepository(Store);
    let store;
    try {
      store = await storeRepository.findOneOrFail(id);
    } catch (error) {
      res.status(404).send({ response: "User not found" });
      return;
    }

    store.email = email;
    const errors = await validate(store);
    if (errors.length > 0) {
      res.status(400).send({ response: `Wrong Formatting: ${errors}` });
      return;
    }

    try {
      await storeRepository.save(store);
    } catch (e) {
      res.status(409).send({ response: "Email already in use" });
      return;
    }

    res.status(204).send();
  };

  static delete = async (req: Request, res: Response) => {
    const id = req.params.id;

    const storeRepository = getRepository(Store);
    let store: Store;
    try {
      store = await storeRepository.findOneOrFail(id);
    } catch (error) {
      res.status(404).send({ response: "User not found" });
      return;
    }
    storeRepository.delete(id);

    res.status(204).send();
  };

  static addComment = async (req: Request, res: Response) => {
    const { rating, storeId, description } = req.body;

    const storeRepository = getRepository(Store);
    const commentRepository = getRepository(Comment);

    const store = await storeRepository.findOneOrFail({ where: storeId });

    const comment = new Comment();

    comment.rating = rating;
    comment.store = store;
    comment.description = description;

    await commentRepository.save(comment);

    res.status(200).send({
      rating: rating,
      description: description,
    });
  };
}

export default StoreController;
