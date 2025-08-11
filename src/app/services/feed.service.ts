import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Feed } from '../models/feed.model';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  private apiUrlGetAllFeeds: string;
  private apiUrlGetFeedsByCategory: string;  // URL de l'API
  private apiKey: string;



  constructor(private http: HttpClient, private configService: ConfigService) {
    this.apiUrlGetAllFeeds = this.configService.apiUrl + '/feeds';
    this.apiUrlGetFeedsByCategory = this.configService.apiUrl + '/feeds/by-category';
    this.apiKey = this.configService.apiKey;
  }



  getAllFeeds(): Observable<Feed[]> {
    const headers = new HttpHeaders().set('X-API-KEY', this.apiKey);

    return this.http.get<{ feeds: Feed[] }>(this.apiUrlGetAllFeeds, { headers }).pipe(
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
