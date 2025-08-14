import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ResumeDataService } from './resume-data.service';

describe('ResumeDataService', () => {
  let service: ResumeDataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ResumeDataService],
    });
    service = TestBed.inject(ResumeDataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getProjects', () => {
    it('should fetch projects data', () => {
      const mockProjects = {
        Employer: [
          {
            Name: 'Test Company',
            StartDate: '2023-01-01',
            EndDate: '2023-12-31',
            Projects: [],
          },
        ],
      };

      service.getProjects().subscribe(data => {
        expect(data).toEqual(mockProjects);
        expect(data.Employer).toHaveLength(1);
        expect(data.Employer[0].Name).toBe('Test Company');
      });

      const req = httpMock.expectOne('assets/data/projects.json');
      expect(req.request.method).toBe('GET');
      req.flush(mockProjects);
    });

    it('should handle HTTP error for projects', () => {
      service.getProjects().subscribe({
        next: () => fail('should have failed with 404 error'),
        error: error => {
          expect(error.status).toBe(404);
        },
      });

      const req = httpMock.expectOne('assets/data/projects.json');
      req.flush('Not Found', { status: 404, statusText: 'Not Found' });
    });
  });

  describe('getWorkHistory', () => {
    it('should fetch work history data', () => {
      const mockWorkHistory = {
        Employer: [
          {
            Name: 'Test Company',
            StartDate: '2023-01-01',
            EndDate: '2023-12-31',
            Projects: [],
            Languages: [],
            Frameworks: [],
            Libraries: [],
            Tools: [],
          },
        ],
      };

      service.getWorkHistory().subscribe(data => {
        expect(data).toEqual(mockWorkHistory);
        expect(data.Employer).toHaveLength(1);
        expect(data.Employer[0].Name).toBe('Test Company');
      });

      const req = httpMock.expectOne('assets/data/work-history.json');
      expect(req.request.method).toBe('GET');
      req.flush(mockWorkHistory);
    });

    it('should handle HTTP error for work history', () => {
      service.getWorkHistory().subscribe({
        next: () => fail('should have failed with 500 error'),
        error: error => {
          expect(error.status).toBe(500);
        },
      });

      const req = httpMock.expectOne('assets/data/work-history.json');
      req.flush('Server Error', { status: 500, statusText: 'Server Error' });
    });
  });

  describe('getLanguages', () => {
    it('should fetch languages data', () => {
      const mockLanguages = {
        Language: [
          {
            Name: 'TypeScript',
            Experience: [],
          },
        ],
      };

      service.getLanguages().subscribe(data => {
        expect(data).toEqual(mockLanguages);
        expect(data.Language).toHaveLength(1);
        expect(data.Language[0].Name).toBe('TypeScript');
      });

      const req = httpMock.expectOne('assets/data/languages.json');
      expect(req.request.method).toBe('GET');
      req.flush(mockLanguages);
    });
  });

  describe('getFrameworks', () => {
    it('should fetch frameworks data', () => {
      const mockFrameworks = {
        Framework: [
          {
            Name: 'Angular',
            Experience: [],
          },
        ],
      };

      service.getFrameworks().subscribe(data => {
        expect(data).toEqual(mockFrameworks);
        expect(data.Framework).toHaveLength(1);
        expect(data.Framework[0].Name).toBe('Angular');
      });

      const req = httpMock.expectOne('assets/data/frameworks.json');
      expect(req.request.method).toBe('GET');
      req.flush(mockFrameworks);
    });
  });

  describe('service configuration', () => {
    it('should use correct base URL', () => {
      service.getProjects().subscribe();
      const req = httpMock.expectOne('assets/data/projects.json');
      expect(req.request.url).toBe('assets/data/projects.json');
      req.flush({});
    });

    it('should make parallel requests correctly', () => {
      service.getProjects().subscribe();
      service.getWorkHistory().subscribe();
      service.getLanguages().subscribe();
      service.getFrameworks().subscribe();

      const projectsReq = httpMock.expectOne('assets/data/projects.json');
      const workHistoryReq = httpMock.expectOne(
        'assets/data/work-history.json'
      );
      const languagesReq = httpMock.expectOne('assets/data/languages.json');
      const frameworksReq = httpMock.expectOne('assets/data/frameworks.json');

      expect(projectsReq.request.method).toBe('GET');
      expect(workHistoryReq.request.method).toBe('GET');
      expect(languagesReq.request.method).toBe('GET');
      expect(frameworksReq.request.method).toBe('GET');

      projectsReq.flush({ Employer: [] });
      workHistoryReq.flush({ Employer: [] });
      languagesReq.flush({ Language: [] });
      frameworksReq.flush({ Framework: [] });
    });
  });
});
