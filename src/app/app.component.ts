import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FeedComponent} from "./feed/feed.component";
import {FeedListComponent} from "./feed-list/feed-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FeedComponent, FeedListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'YourDigiCurateFrontend';

}
