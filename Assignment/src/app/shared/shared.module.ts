import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { RotateCardDirective } from './directives/Rotate.directive';



@NgModule({
  declarations: [
    PaginationComponent
  ],
  imports: [
    CommonModule, HttpClientModule,
    NgxSpinnerModule
  ],
  exports: [
    PaginationComponent
  ],providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ]
})
export class SharedModule { }
