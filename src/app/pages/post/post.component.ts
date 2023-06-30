import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor() { }
  posts = [{id:1, title:"hello" , body:"heyya"},{id:2, title:"hello" , body:"heyya"},{id:3, title:"hello" , body:"heyya"}]
  ngOnInit(): void {
  }

}
