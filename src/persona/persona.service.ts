import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { Genero } from './entities/genero.entity';
import { Persona } from './entities/persona.entity';

@Injectable()
export class PersonaService {

  constructor(@InjectRepository(Persona) private personaRepository:Repository<Persona>){}

  create(createPersonaDto: CreatePersonaDto) {  
    return this.personaRepository.save(createPersonaDto);
  }

  findAll() {
    return this.personaRepository.find();
  }

  findOne(id: number) {
    return this.personaRepository.findOne(id);
  }

  update(id: number, updatePersonaDto: UpdatePersonaDto) {
    return this.personaRepository.update(id, updatePersonaDto);
  }

  remove(id: number) {
    return this.personaRepository.delete(id);
  }
}
