import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { FeedService } from './feed.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'http://localhost:8080/api/categories';
  private apiKey = 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6'; // Remplace par ta vraie API Key


  constructor(private http: HttpClient) {}

  getCategories(): Observable<string[]> {
    const headers = new HttpHeaders().set('X-API-KEY', this.apiKey);

 
    return this.http.get<{ categories: string[] }>(this.apiUrl,{headers})  .pipe(
      map(response => response.categories)  // Extraction de la propriété 'categories'
    );
  }
}
