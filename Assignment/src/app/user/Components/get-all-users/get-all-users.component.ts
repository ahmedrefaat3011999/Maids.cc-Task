import {
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
  ViewEncapsulation,
} from '@angular/core';
import { User, UsersService } from '../../services/users.service';
import { SharedService } from '../../../shared/shared.service';
import { Router } from '@angular/router';
import AOS from 'aos';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-get-all-users',
  templateUrl: './get-all-users.component.html',
  styleUrls: ['./get-all-users.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GetAllUsersComponent implements OnInit {
  users: User[] | undefined;
  filteredUsers: User[] | undefined;
  totalPages: number | undefined;
  pageNumbers: number[] | undefined;
  currentPage: number | undefined;
  searchInput: string = '';
  errorEnterNumber: boolean = false;
  errorNotFound: boolean = false;

  constructor(
    private userService: UsersService,
    private sharedService: SharedService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
      this.subscribeToSearchTerm();
      this.getUsersFor();
    }
  }

  getUsersFor(pageNumber = 1): void {

    // Check if users are already cached for the requested page number
    if (this.userService.isCached(pageNumber)) {
      const cachedData = this.userService.getCachedData(pageNumber);
      this.users = cachedData?.users;
      this.filteredUsers = this.users;
      this.totalPages = cachedData?.totalPages;
      this.pageNumbers = cachedData?.pageNumbers;
      this.currentPage = pageNumber;
    } else {
      this.userService.getUsers(pageNumber).subscribe(
        (response: any) => {
          this.users = response?.data || [];
          this.filteredUsers = this.users;
          this.totalPages = response.total_pages;
          this.pageNumbers = Array.from(
            { length: this.totalPages || 0 },
            (_, i) => i + 1
          );
          this.currentPage = pageNumber;

          // Cache the fetched users' data
          this.userService.cacheData(pageNumber, {
            users: this.users,
            totalPages: this.totalPages,
            pageNumbers: this.pageNumbers,
          });
        },
        (error) => {
          console.log('Got the Error:', error);
        }
      );
    }
  }

  private subscribeToSearchTerm(): void {
    this.sharedService.getSearchTerm().subscribe((term) => {
      this.filterUsers(term);
    });
  }

  filterUsers(searchTerm: string = ''): void {
    this.errorNotFound = false;
    this.errorEnterNumber = false;

    if (searchTerm.trim() === '') {
      this.filteredUsers = this.users;
      // Return to the page of users
      this.navigateToUsersPage();
    } else {
      const numericSearchTerm = parseInt(searchTerm.trim(), 10);

      if (isNaN(numericSearchTerm)) {
        this.errorEnterNumber = true;
        this.filteredUsers = [];
      } else {
        const filtered = (this.users || []).filter(
          (user) => user.id === numericSearchTerm
        );

        if (filtered.length === 0) {
          this.errorNotFound = true;
          // Clear the filtered users if no matches found
          this.filteredUsers = [];
        } else {
          // If there is a single user matching the ID, navigate to the user details page
          if (filtered.length === 1) {
            this.navigateToUserDetails(filtered[0].id);
          } else {
            this.filteredUsers = filtered;
          }
        }
      }
    }
  }

  navigateToUsersPage(): void {
    this.router.navigate(['/users']);
  }

  navigateToUserDetails(userId: number): void {
    this.router.navigate(['/userDetails', userId]);
  }
}
