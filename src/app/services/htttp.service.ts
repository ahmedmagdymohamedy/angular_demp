import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../my-types/user';

@Injectable({
  providedIn: 'root'
})
export class HtttpService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<any>('https://reqres.in/api/users?page=1');
  }

  getPosts() {
    return this.http.get<any>('https://dummyjson.com/posts');
  }
  getPost(id: number) {
    return this.http.get<any>('https://dummyjson.com/posts' + `/${id}`);
  }

  postUser(userData: User): Observable<any> {
    return this.http.post("http://localhost:3000/users", userData);
  }
}
