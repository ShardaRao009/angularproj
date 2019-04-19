import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-component',
  templateUrl: './image-component.component.html',
  styleUrls: ['./image-component.component.css']
})
export class ImageComponentComponent implements OnInit {
@Input() dataForImagePost;
  constructor() { }

  ngOnInit() {
  }

}
