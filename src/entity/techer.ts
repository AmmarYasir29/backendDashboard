import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  BaseEntity,
} from "typeorm";

@Entity("teachers")
export class Teacher extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  emaill: string;

  @Column()
  password: string;

  @Column()
  type: string; //can write, read // Authintication

  @Column()
  branch: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;
}
