import { Component, OnInit } from '@angular/core';
import { PostserviceService } from 'src/app/services/postservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css']
})
export class EditpostComponent implements OnInit {
  id:any;
  public form={
    description:null, 
    title:null,
    user_id:null
  }
  constructor(private postService:PostserviceService,
    private route:ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
  }

  updatePost(){

this.postService.updatePost(this.id,this.form).subscribe(

)

  }

}
