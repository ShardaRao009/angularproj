import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to BlogBook';
  test="a";
  
  rootTest(data){
    console.log(data);
  }

}
