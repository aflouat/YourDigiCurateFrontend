import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { SideMenuComponent } from "../side-menu/side-menu.component";
import { FeedListComponent } from "../feed-list/feed-list.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, SideMenuComponent, FeedListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  selectedCategory: string = 'Technology';  // Catégorie par défaut
  onCategorySelected(category: string): void {
    this.selectedCategory = category;  // Mettre à jour la catégorie sélectionnée
  }


}
