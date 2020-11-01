import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  ManyToOne,
  BaseEntity,
} from "typeorm";
import { Student } from "./Students";
import { Teacher } from './techer';

@Entity("teacherStudents")
export class TeacherStudent extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // -------------------------------- Relations --------------------------------

  @ManyToOne((type) => Teacher, (teacher) => teacher.id)
  Teacher: Teacher;

  @ManyToOne((type) => Student, (student) => student.id)
  student: Student;
}
