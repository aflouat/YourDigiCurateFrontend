import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map, Observable} from 'rxjs';
import { Feed } from '../models/feed.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  private apiUrlGetAllFeeds =environment.apiUrl+'/feeds';  // URL de l'API
  private apiUrlGetFeedsByCategory =environment.apiUrl+'/feeds/by-category';  // URL de l'API



  constructor(private http: HttpClient) { }



  getAllFeeds(): Observable<Feed[]> {
    const headers = new HttpHeaders().set('X-API-KEY', environment.apiKey);

    return this.http.get<{ feeds: Feed[] }>(this.apiUrl,{headers}).pipe(
      map(response => response.feeds)
    );
  }

  getFeedsByCategory(category: string): Observable<Feed[]> {
    const headers = new HttpHeaders().set('X-API-KEY', this.apiKey);

    return this.http.get<{ feeds: Feed[] }>(`${this.apiUrlGetFeedsByCategory}?category=${category}`, { headers }).pipe(
      map(response => response.feeds)
    );
  }
}
