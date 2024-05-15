import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService   {
  private cachedData: { [pageNumber: number]: CachedUserData } = {};
   api = environment.apiConfig;

  constructor(private http: HttpClient) { }
  

  getUsers(page:any){
    return this.http.get(`${this.api.apiUrl}?page=${page}`);
  }
  getUserDetails(id: any) {
    return this.http.get(`${this.api.apiUrl}/${id}`);
  }
  
  
  // To optimize performance,  caching mechanisms to avoid making additional requests for previously fetched data.
  isCached(pageNumber: number): boolean {
    return pageNumber in this.cachedData;
  }

  getCachedData(pageNumber: number): CachedUserData | undefined {
    return this.cachedData[pageNumber];
  }

  cacheData(pageNumber: number, data: CachedUserData): void {
    this.cachedData[pageNumber] = data;
  }
}

export interface CachedUserData {
  users?: User[];
  totalPages?: number; 
  pageNumbers: number[];

}
export { User };

