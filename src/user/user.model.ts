import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

export interface User {
  id: number;
  email: string;
  name: string;
  companyName: string;
}
@Entity()
export class UserEntity implements User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  companyName: string;
}
