import { Component, OnInit } from '@angular/core';
import {DatePipe} from "@angular/common";
import {Feed} from "../feed.model";



@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  standalone: true,
  imports: [
    DatePipe
  ],
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  feed: Feed = {
    title: 'Exemple de titre',
    description: 'Ceci est une description d\'exemple pour le feed.',
    date: new Date(),
    link: 'https://exemple.com',
    category: 'Technologie'
  };

  constructor() { }

  ngOnInit(): void {
  }
}
