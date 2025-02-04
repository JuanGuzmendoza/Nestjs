import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class profesores {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;
}