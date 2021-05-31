import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {

  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }


  storePost(data:Object) {
    return this.http.post(`${this.baseUrl}/posts`,data)
  }
  getPostData() {
    return this.http.get(`${this.baseUrl}/posts`)
  }

  getPostById(id:number) {
    return this.http.get(`${this.baseUrl}/posts`+id)
  }

  getPostByUser(id:number) {
    return this.http.get(`${this.baseUrl}/posts`+id)
  }
  deletePost(id:number){ 
    return this.http.delete(`${this.baseUrl}/posts/`+id)
  }
  updatePost(id:number,data:Object) {
    return this.http.post(`${this.baseUrl}/posts/`+id,data)
  }
  getUserById(id:number){
    return this.http.get(`${this.baseUrl}/user`+id)
  }

}
