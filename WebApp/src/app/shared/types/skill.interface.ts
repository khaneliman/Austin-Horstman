import { Experience } from './experience.interface';

export interface Skill {
  Name: string;
  Experience: Experience[];
}

export interface Language extends Skill {}

export interface Framework extends Skill {}