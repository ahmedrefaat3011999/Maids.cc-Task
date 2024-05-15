import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/shared.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isNavbarCollapsed: boolean = true;
  searchInput: string = '';
  disableSearchInput: boolean = false;

  constructor(
    private searchService: SharedService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.disableSearchInput =! this.router.url.includes('/users');
    });
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  filterUsers(): void {
    setTimeout(() => {
      this.searchService.setSearchTerm(this.searchInput.trim());
    }, 500);
  }
}