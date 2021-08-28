import { Module } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { PersonaController } from './persona.controller';
import { Persona } from './entities/persona.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Genero } from './entities/genero.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Persona])],
  controllers: [PersonaController],
  providers: [PersonaService]
})
export class PersonaModule {}
