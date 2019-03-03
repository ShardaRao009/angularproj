import { Component, OnInit, Input,Output, EventEmitter} from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
@Input() sample1;

// @Output('newti') king= new EventEmitter();

<<<<<<< HEAD


firstCardArray =[];
=======
firstCardArray =[{a:'Abc',b:'def'}];
>>>>>>> b1dfedd91989e8072ec15f7a1d2962f16c858b88


  constructor() { }

  ngOnInit() {
     this.firstCardArray=[{name:'jony',post:'kkr',likes:'21',comments:'hdjdhsgjfs'},
     {name:'cally',post:'hdh',likes:'19',comments:'hdjdhsgjdhkjfs'},
     {name:'belly',post:'jdsd',likes:'19',comments:'hdjdhsjjjjjgjfs'}];
    console.log(this.sample1);
  }

  // sampleClick(){
  //   let r = {a:"asd",b:"adfas"};
  //  // this.king.emit(r);
  // }
}
