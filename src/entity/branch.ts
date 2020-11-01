import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  BaseEntity,
} from "typeorm";
import { Teacher } from './techer';

@Entity("Branches")
export class Branche extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "float" })
  name: number;

  @Column()
  department: string;

  // -------------------------------- Relations ------------------------

  @ManyToOne((type) => Teacher, (teacher) => teacher.id)
  teacher: Teacher;
}
