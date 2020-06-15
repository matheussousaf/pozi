import { User } from "./User";
import { Entity, Column, Unique } from "typeorm";
import { Length } from "class-validator";

@Entity()
export class Trucker extends User {
  @Column()
  points: Number = 0;

  @Column()
  profilePicture: string;
}
