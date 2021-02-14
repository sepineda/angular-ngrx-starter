import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RestApiService } from './rest-api.service';

describe('RestHttpService', () => {
  let service: RestApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        RestApiService
      ]
    });
    service = TestBed.inject(RestApiService);
    httpMock = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have the baseUrl set to ', () => {
    expect(service.baseUrl).toEqual('api_url');
  });

  it('should return an Observable for post', () => {
    service.post('/api/characteristics', {}).subscribe();

    const req = httpMock.expectOne(`${service.baseUrl}/api/characteristics`);
    expect(req.request.method).toBe('POST');
    req.flush({});
  });
});
