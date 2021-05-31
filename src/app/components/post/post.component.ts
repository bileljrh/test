import { Component, OnInit } from '@angular/core';
import { PostserviceService } from 'src/app/services/postservice.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  data = [] as any;
  public form = {
    description: null,
    title: null,
    user_id:null

  };
  constructor(private postService:PostserviceService) { }

  ngOnInit(): void {
    this.getData();
  }

  deleteData(id:number){
    return this.postService.deletePost(id).subscribe(
   )} 
}

   getData(){
    this.postService.getPostData().subscribe((res:any)=>{
    this.data = res; 
})
}



}

