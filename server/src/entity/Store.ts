import { User } from "./User";
import { Entity, Column, OneToMany } from "typeorm";
import { Length } from "class-validator";
import { Comment } from "./Comment";

@Entity()
export class Store extends User {
  @Column()
  @Length(4, 255)
  description: string;

  @Column()
  @Length(4, 100)
  email: string;

  @Column()
  profilePicture: string;

  @Column()
  ratingAverage: number;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @OneToMany((type) => Comment, (photo) => photo.store)
  comments: Comment[];
}
