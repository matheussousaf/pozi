import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { getRepository } from "typeorm";
import { validate } from "class-validator";
import { User } from "../../entity/User";
import config from "../../config/config";
import { Store } from "../../entity/Store";
import { Trucker } from "../../entity/Trucker";

class AuthController {
  static loginStore = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const storeRepository = getRepository(Store);

    try {
      const store = await storeRepository.findOneOrFail({
        where: { email },
      });

      if (!(await store).checkIfUnencryptedPasswordIsValid(password)) {
        res.status(401).send({ response: "Wrong credentials. " });
        return;
      }

      const token = jwt.sign(
        { userId: store.id, email: store.email },
        config.jwtSecret,
        { expiresIn: "24h" }
      );

      res.send({
        email: email,
        token: token,
      });
    } catch (error) {
      res.status(401).send({ response: "Wrong credentials. " });
    }
  };

  static loginTrucker = async (req: Request, res: Response) => {
    const { whatsappNumber, password } = req.body;

    if (!(whatsappNumber && password)) {
      res.status(400).send({
        response: "Wrong data, format needs to be: whatsappNumber, password.",
      });
    }

    const truckerRepository = getRepository(Trucker);

    try {
      const trucker = await truckerRepository.findOneOrFail({
        where: { whatsappNumber },
      });

      if (!(await trucker).checkIfUnencryptedPasswordIsValid(password)) {
        res.status(401).send({ response: "Wrong credentials. " });
        return;
      }

      const token = jwt.sign(
        { userId: trucker.id, email: trucker.email },
        config.jwtSecret,
        { expiresIn: "24h" }
      );

      res.send({
        whatsappNumber: whatsappNumber,
        token: token,
      });
    } catch (error) {
      res.status(401).send({ response: "Wrong credentials. " });
    }
  };

  static changePassword = async (req: Request, res: Response) => {
    const id = res.locals.jwtPayload.userId;

    const { oldPassword, newPassword, type } = req.body;
    
    if (!(oldPassword && newPassword && type)) {
      res.status(400).send({
        response:
          "Wrong data, format needs to be: oldPassword, newPassword, type.",
      });
    }

    // TODO: Change Password

    const userRepository = getRepository(User);
    let user: User;
    try {
      user = await userRepository.findOneOrFail(id);
    } catch (id) {
      res.status(401).send({ response: "Wrong credentials." });
    }

    if (!user.checkIfUnencryptedPasswordIsValid(oldPassword)) {
      res.status(401).send({ response: "Wrong credentials." });
      return;
    }

    user.password = newPassword;
    const errors = await validate(user);
    if (errors.length > 0) {
      res.status(400).send({ response: `Wrong Formatting: ${errors}` });
      return;
    }

    user.hashPassword();
    userRepository.save(user);

    res.status(204).send();
  };
}
export default AuthController;
