import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map, Observable} from 'rxjs';
import {Feed} from "./feed.model";

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  private apiUrl = 'http://localhost:3002/api/feeds';  // URL de l'API


  constructor(private http: HttpClient) { }



  getAllFeeds(): Observable<Feed[]> {
    return this.http.get<{ feeds: Feed[] }>(this.apiUrl).pipe(
      map(response => response.feeds)
    );
  }
}
