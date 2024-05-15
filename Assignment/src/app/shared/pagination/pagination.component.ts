import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,

  styleUrl: './pagination.component.scss'
})
export class PaginationComponent implements OnInit {

  @Input() totalPages: any;
  @Input() pageNumbers: any;
  @Input() currentPage: any;
  @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();

  constructor(private spinner:NgxSpinnerService) { }

  ngOnInit() {
  }
  getUsersFor(selectedPageNumber: number ) {
    this.pageChanged.emit(selectedPageNumber);

  }
}
