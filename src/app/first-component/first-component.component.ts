import { Component, OnInit, Input,Output, EventEmitter} from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
@Input() sample1;

@Output('newti') king= new EventEmitter();

firstCardArray =[{a:'Abc',b:'def'}];


  constructor() { }

  ngOnInit() {
    // this.firstCardArray=[{name:'jony',post:'kkr',likes:'21',comments:'hdjdhsgjfs'},
    // {name:'cally',post:'hdh',likes:'19',comments:'hdjdhsgjdhkjfs'},
    // {name:'belly',post:'jdsd',likes:'19',comments:'hdjdhsjjjjjgjfs'}]
    // console.log(this.sample1);
  }

  sampleClick(){
    let r = {a:"asd",b:"adfas"};
    this.king.emit(r);
  }
}
