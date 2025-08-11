import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { HomeComponent } from './home.component';
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { CategoryService } from "../services/category.service";
import { MockConfigService } from '../mockConfig.service';
import { ConfigService } from '../config.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [
        CategoryService,
        provideHttpClient(withInterceptorsFromDi()), // fournit HttpClient

        provideHttpClientTesting(), // provides HttpClient for testing
        { provide: ConfigService, useClass: MockConfigService }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
