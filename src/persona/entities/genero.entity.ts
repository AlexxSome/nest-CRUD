import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Persona } from "./persona.entity";

@Entity()
export class Genero{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @OneToMany(()=>Persona, persona=> persona.sexo)
    persona: Persona[];
}