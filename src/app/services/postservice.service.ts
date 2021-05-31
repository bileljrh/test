import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {

  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }


  storePost(data:any) {
    return this.http.post(`${this.baseUrl}/posts`,data)
  }
  getPostData() {
    return this.http.get(`${this.baseUrl}/posts`)
  }
  
  getPostById(id:any) {
    return this.http.get(`${this.baseUrl}/posts`+id)
  }

  getPostByUser(id:any) {
    return this.http.get(`${this.baseUrl}/posts`+id)
  }
  deletePost(id:any){ 
    return this.http.delete(`${this.baseUrl}/posts/`+id)
  }
  updatePost(id:any,data:any) {
    return this.http.post(`${this.baseUrl}/posts/`+id,data)
  }
  getUserById(id:any){
    return this.http.get(`${this.baseUrl}/user`+id)
  }

}
