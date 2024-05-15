import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { Location } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Aos from 'aos' ;
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
})
export class UserDetailsComponent implements OnInit {
  id: any;
  Details: any = {};
  constructor(
    private router: Router,
    private userService: UsersService,
    private location: Location,
    private spinner:NgxSpinnerService,@Inject(PLATFORM_ID) private platformId: Object

  ) {}
  ngOnInit(): void {
    // the isPlatformBrowser function is used to check if the code is running on the client side before accessing the window object.
    if (isPlatformBrowser(this.platformId)) {
      Aos.init()

    this.id = window.location.href.split('/')[4];
    console.log(this.id);
    this.userDetails(this.id);
    }
  }

  userDetails(id: any) {
    this.userService.getUserDetails(id).subscribe((response) => {
      console.log(response);
      this.Details = response;
    });
  }
  goBack(): void {
    this.location.back();
  }
}
