// src/app/config.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    private config: any;

    constructor(private http: HttpClient) { }

    loadConfig(): Observable<any> {
        return this.http.get('./assets/config.json').pipe(
            tap(data => this.config = data)
        );
    }

    get apiKey(): string {
        return this.config.apiKey;
    }

    get apiUrl(): string {
        return this.config.apiUrl;
    }
}