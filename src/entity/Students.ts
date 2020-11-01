import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity("students")
export class Student extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column()
    stage: number;

    @Column()
    phone: string;

    @Column()
    inCollegeResidence: boolean;

    @Column()
    graduationYear: number;

    @Column()
    eveningCollege: boolean;

    @Column()
    email: string;

    @Column()
    degree: string;

    @Column()
    city: string;
}
