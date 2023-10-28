import { TestBed } from '@angular/core/testing';

import { GetUsersService } from './get-users.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('GetUsersService', () => {
  let service: GetUsersService;
  let httpTestingController : HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(GetUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send a GET request with the correct URL and query parameter (q)', () => {
    const searchTerm = 'test';
    service.getUsers(searchTerm).subscribe();

    const req = httpTestingController.expectOne(request => {
      return (
        request.url === service.url &&
        request.method === 'GET' &&
        request.params.get('q') === searchTerm
      );
    });

    expect(req).toBeTruthy();
  });
});
