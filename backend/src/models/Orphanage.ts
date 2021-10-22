import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import Image from './Image';

@Entity('orphanages')
export default class Orphanage {
  @PrimaryGeneratedColumn('increment')
  id: number 

  @Column()
  name: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  about: string;

  @Column()
  instructions: string;

  @Column()
  opening_hours: string;

  @Column()
  open_on_weekends: string;

  @OneToMany(() => Image, image => image.orphanage, { // tipo do retorno / variável que amazena o relacionamento no Image - Model
    cascade: ['insert', 'update',] // cadastra automaticamente a imagem na tabela images no DB
  })       
  @JoinColumn({ name: 'orphanage_id'})   // nome da coluna que armazena o relacionamento de orphanage com image -- no DB - tabela Images 
  images: Image[];
}