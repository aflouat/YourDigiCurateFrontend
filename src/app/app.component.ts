import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FeedListComponent} from "./feed-list/feed-list.component";
import { SideMenuComponent } from './side-menu/side-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FeedListComponent,SideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'YourDigiCurateFrontend';

}
