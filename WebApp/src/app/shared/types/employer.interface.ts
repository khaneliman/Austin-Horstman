import { Project } from './project.interface';

export interface Employer {
  Name: string;
  StartDate: string;
  EndDate: string;
  Projects: Project[];
}

export interface EmployerWithTech extends Employer {
  Languages: string[];
  Frameworks: string[];
  Libraries: string[];
  Tools: string[];
}
