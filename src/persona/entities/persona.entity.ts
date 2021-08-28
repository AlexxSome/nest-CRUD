import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne } from 'typeorm';
import { Genero } from './genero.entity';

@Entity()
export class Persona {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    firstName: string;
  
    @Column()
    lastName: string;

    @ManyToOne(()=>Genero, genero => genero.persona,  {eager: true, nullable: false, onDelete: 'CASCADE'})
    sexo: Genero;
}
