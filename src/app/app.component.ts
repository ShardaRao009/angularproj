import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to BlogBook';
  test="a";
  
  postComponentJson=[{userName:'cally',userImage:'path',post:'Hey feeling bored with Angular',commentsCount:'17',likes:'25'},
  {userName:'jelly',userImage:'path',post:'Hey I am Enjoying Angular',commentsCount:'7',likes:'5'},
  {userName:'kukku',userImage:'path',post:'Paitence is the key to success',commentsCount:'1',likes:'2'}]
}
  // rootTest(data){
  //   console.log(data);
  // }


