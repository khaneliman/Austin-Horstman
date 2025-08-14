import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employer, EmployerWithTech, Framework, Language } from '../../shared/types';

@Injectable({
  providedIn: 'root'
})
export class ResumeDataService {
  private http = inject(HttpClient);
  private readonly baseUrl = 'assets/data';

  getProjects(): Observable<{ Employer: Employer[] }> {
    return this.http.get<{ Employer: Employer[] }>(`${this.baseUrl}/projects.json`);
  }

  getWorkHistory(): Observable<{ Employer: EmployerWithTech[] }> {
    return this.http.get<{ Employer: EmployerWithTech[] }>(`${this.baseUrl}/work-history.json`);
  }

  getLanguages(): Observable<{ Language: Language[] }> {
    return this.http.get<{ Language: Language[] }>(`${this.baseUrl}/languages.json`);
  }

  getFrameworks(): Observable<{ Framework: Framework[] }> {
    return this.http.get<{ Framework: Framework[] }>(`${this.baseUrl}/frameworks.json`);
  }
}