import { Routes } from '@angular/router';
import { FeedListComponent } from './feed-list/feed-list.component';

export const routes: Routes = [
      { path: 'feeds/:category', component: FeedListComponent },
    { path: '', redirectTo: '/feeds/all', pathMatch: 'full' },];
