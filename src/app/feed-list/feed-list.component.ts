import { Component, OnInit, Input } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FeedService } from "../feed.service";
import { Feed } from "../feed.model";
import { FormsModule } from "@angular/forms";
import { MatFormField } from "@angular/material/form-field";
import { NgxPaginationModule } from "ngx-pagination";
import { DatePipe, NgClass, NgStyle } from "@angular/common";
import { MatPaginator } from "@angular/material/paginator";

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  standalone: true,
  styleUrls: ['./feed-list.component.scss'],
  imports: [
    FormsModule,
    MatFormField,
    NgxPaginationModule,
    DatePipe,
    MatPaginator,
    NgStyle,
    NgClass,
    NgForOf
  ]
})
export class FeedListComponent implements OnInit {
  @Input() category: string = 'Technology'; // Catégorie sélectionnée par défaut
  feeds: Feed[] = [];
  filteredFeeds: Feed[] = [];
  displayedFeeds: Feed[] = [];  // Pour afficher les feeds paginés
  searchQuery: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 3;
  totalPages: number = 1;

  constructor(private feedService: FeedService) { }

  ngOnInit(): void {
    this.loadFeeds();
  }

  loadFeeds(): void {
    this.feedService.getAllFeeds().subscribe(feeds => {
      this.feeds = feeds.map(feed => ({ ...feed, hover: false }));
      this.applySearchFilterAndPaginate();  // Appliquer le filtre dès le chargement
    });
  }

  applySearchFilterAndPaginate(): void {
    // Filtrer les feeds sans toucher à la liste originale
    this.filteredFeeds = this.feeds.filter(feed =>
      feed.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      feed.description.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    this.currentPage = 1;  // Réinitialiser à la première page après le filtrage
    this.updatePagination();
  }

  updatePagination(): void {
    this.totalPages = Math.ceil(this.filteredFeeds.length / this.itemsPerPage);
    this.paginateFeeds();
  }

  paginateFeeds(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedFeeds = this.filteredFeeds.slice(startIndex, endIndex); // Mets à jour les feeds à afficher
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.paginateFeeds();
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.paginateFeeds();
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginateFeeds();
    }
  }

  toggleHover(feed: Feed, state: boolean): void {
    feed.hover = state;
  }

  trackByTitle(index: number, feed: Feed): string {
    return feed.title;
  }
}
