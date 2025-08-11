import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedListComponent } from './feed-list.component';
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { FeedService } from "../services/feed.service";
import { ConfigService } from '../config.service';
import { mockConfig } from '../../assets/mock.config';
import { MockConfigService } from '../mockConfig.service';

describe('FeedListComponent', () => {
  let component: FeedListComponent;
  let fixture: ComponentFixture<FeedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedListComponent],
      providers: [
        FeedService,
        provideHttpClient(withInterceptorsFromDi()), // fournit HttpClient
        provideHttpClientTesting(), // fournit HttpClient pour les tests
        { provide: ConfigService, useClass: MockConfigService }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FeedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
