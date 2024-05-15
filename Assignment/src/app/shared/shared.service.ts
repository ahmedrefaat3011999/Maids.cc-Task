import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  isSearchEnabled: boolean = true;

  constructor() { }
  private searchSubject: Subject<string> = new Subject<string>();

  setSearchTerm(term: string): void {
    this.searchSubject.next(term);
  }

  getSearchTerm(): Observable<string> {
    return this.searchSubject.asObservable();
  }
}
