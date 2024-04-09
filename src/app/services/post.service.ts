import { Injectable } from '@angular/core';
import { Post } from '../models/post.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  apiUrl=environment.apiUrl
  constructor(private http:HttpClient) { }
  getPosts(id:number){

    return this.http.get<Post[]>(`${this.apiUrl}post?userId=${id}`);
    
  }
}
