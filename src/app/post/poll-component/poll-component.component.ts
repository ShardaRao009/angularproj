import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-poll-component',
  templateUrl: './poll-component.component.html',
  styleUrls: ['./poll-component.component.css']
})
export class PollComponentComponent implements OnInit {
@Input() dataForPoll;@Input() answer;

  constructor() { }

  ngOnInit() {
  console.log(this.answer);
  }

}
