import { TestBed } from '@angular/core/testing';
import {provideHttpClientTesting} from "@angular/common/http/testing";
import { FeedService } from './feed.service';
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";

describe('FeedService', () => {
  let service: FeedService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeedService,
        provideHttpClient(withInterceptorsFromDi()), // fournit HttpClient
        provideHttpClientTesting()]
    });
    service = TestBed.inject(FeedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
