import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { FeedService } from './feed.service';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = environment.apiUrl+'/categories';


  constructor(private http: HttpClient) {}

  getCategories(): Observable<string[]> {
    const headers = new HttpHeaders().set('X-API-KEY', environment.apiKey);

 
    return this.http.get<{ categories: string[] }>(this.apiUrl,{headers})  .pipe(
      map(response => response.categories)  // Extraction de la propriété 'categories'
    );
  }
}
