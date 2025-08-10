import { ComponentFixture, TestBed } from '@angular/core/testing';
import {provideHttpClientTesting} from "@angular/common/http/testing";
import { CategoryService } from '../services/category.service';
import { FeedService } from '../services/feed.service';
import { SideMenuComponent } from './side-menu.component';
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";

describe('SideMenuComponent', () => {
  let component: SideMenuComponent;
  let fixture: ComponentFixture<SideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideMenuComponent],
      providers: [
      CategoryService,
      FeedService,
        provideHttpClient(withInterceptorsFromDi()), // fournit HttpClient
        provideHttpClientTesting()
    ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
