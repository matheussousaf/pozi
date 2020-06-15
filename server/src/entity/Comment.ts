import { PrimaryGeneratedColumn, Column, Unique, Entity, ManyToOne } from "typeorm";
import { Length } from "class-validator";
import { Store } from "./Store";

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Length(4, 255)
  description: string;

  @Column()
  rating: number;

  @ManyToOne((type) => Store, (store) => store.comments)
  store: Store;
}
