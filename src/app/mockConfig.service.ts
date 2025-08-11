import { Observable, of } from "rxjs";
import { mockConfig } from "../assets/mock.config";

export class MockConfigService {
    config = mockConfig;

    loadConfig(): Observable<any> {
        return of(this.config);
    }

    get apiKey(): string {
        return this.config.apiKey;
    }

    get apiUrl(): string {
        return this.config.apiUrl;
    }
}