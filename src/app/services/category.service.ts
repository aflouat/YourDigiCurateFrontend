import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { FeedService } from './feed.service';
import { ConfigService } from '../config.service';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl: string;
  private apiKey: string;


  constructor(private http: HttpClient, private configService: ConfigService) {
    this.apiKey = this.configService.apiKey;
    this.apiUrl = this.configService.apiUrl;
  }

  getCategories(): Observable<string[]> {
    const headers = new HttpHeaders().set('X-API-KEY', this.apiKey);
    console.log('Fetching categories from API:', this.apiUrl + '/categories');
    console.log('Using headers:', headers);

    return this.http.get<{ categories: string[] }>(this.apiUrl + '/categories', { headers }).pipe(
      map(response => response.categories)  // Extraction de la propriété 'categories'
    );
  }
}
