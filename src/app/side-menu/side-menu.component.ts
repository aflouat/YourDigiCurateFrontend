import { Component, EventEmitter, Output } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FeedService } from '../services/feed.service';
import { Feed } from '../models/feed.model';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {
  categories: string[] = [];
  @Output() categorySelected = new EventEmitter<string>();  // Emetteur d'événements
  selectedCategory: string = '';  // Catégorie actuellement sélectionnée



  constructor(private categoryService: CategoryService,private feedService: FeedService) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      console.log("data:"+data);
      this.categories = data;
    });
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;  // Mettre à jour la catégorie sélectionnée
    this.categorySelected.emit(category);  // Émettre la catégorie sélectionnée
  }

 
}
