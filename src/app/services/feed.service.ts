import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map, Observable} from 'rxjs';
import { Feed } from '../models/feed.model';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  private apiUrl = 'http://localhost:8080/api/feeds';  // URL de l'API
  public apiKey = 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6'; // Remplace par ta vraie API Key


  constructor(private http: HttpClient) { }



  getAllFeeds(): Observable<Feed[]> {
    const headers = new HttpHeaders().set('X-API-KEY', this.apiKey);

    return this.http.get<{ feeds: Feed[] }>(this.apiUrl,{headers}).pipe(
      map(response => response.feeds)
    );
  }
}
