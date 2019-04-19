import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { ThirdComponent } from './third-component/third-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { TextComponentComponent } from './post/text-component/text-component.component';
import { ImageComponentComponent } from './post/image-component/image-component.component';
import { PollComponentComponent } from './post/poll-component/poll-component.component';
import { CommentComponentComponent } from './post/comment-component/comment-component.component';
import { SubCommentComponentComponent } from './post/sub-comment-component/sub-comment-component.component';
import { MainService } from './mainServices';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    TextComponentComponent,
    ImageComponentComponent,
    PollComponentComponent,
    CommentComponentComponent,
    SubCommentComponentComponent,
    ThirdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
