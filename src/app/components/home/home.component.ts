import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  post:Post[]=[];
  completed:boolean=false;
  active: boolean = true;
constructor(private postSrv:PostService){}

ngOnInit(): void {
  const userId=JSON.parse( localStorage.getItem('user') ?? '')
  this.postSrv.getPosts(userId.user.id).subscribe(data=>{
    this.post=data
    console.log(this.post);
    
  })
}
home(){
this.completed=true
}
handlePostActive(){
  this.completed = false
  this.completed = true
}
}
