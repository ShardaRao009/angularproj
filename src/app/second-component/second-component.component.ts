import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {
  
@Output() postCard= new EventEmitter();



  constructor() { }

  ngOnInit() {
  
  }
  postCardClick(){
    this.postCard.emit('abc');
  }
}
