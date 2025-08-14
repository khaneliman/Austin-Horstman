import { Experience } from './experience.interface';

export interface Skill {
  Name: string;
  Experience: Experience[];
}

export type Language = Skill;

export type Framework = Skill;
