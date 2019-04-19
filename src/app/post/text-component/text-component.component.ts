import { Component, OnInit,Input } from '@angular/core';
import {MainService} from '../../mainServices';

@Component({
  selector: 'app-text-component',
  templateUrl: './text-component.component.html',
  styleUrls: ['./text-component.component.css']
})
export class TextComponentComponent implements OnInit {
@Input() dataForText;
@Input() data;


  constructor(private mainService:MainService) { }

  ngOnInit() {
  }
  clickMe(){
    console.log(this.mainService.postCardJson);
  }
}
