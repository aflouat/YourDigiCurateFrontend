// src/app/about/about.component.ts
import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  template: `
    <h2>Informations sur l'application</h2>
    <div *ngIf="config">
      <p>Nom de l'image : {{ config.imageName }}</p>
      <p>Version de l'image : {{ config.imageVersion }}</p>
      <p>Date de déploiement : {{ config.buildDate }}</p>
      <p>Dernier commit : {{ config.lastCommit }}</p>
    </div>
  `,
  standalone: true,
  imports: [CommonModule]
})
export class AboutComponent implements OnInit {
  config: any;

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.config = this.configService.loadConfig;
  }
}