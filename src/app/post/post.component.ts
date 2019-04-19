import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { text } from '@angular/core/src/render3';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

   @Input() postObjects;
  // @Output() postText = new EventEmitter();

  // postClick() {
  //   this.postText.emit = (this.postObjects.category);
  // }



  constructor() { }

  ngOnInit() {
   
  }

}
