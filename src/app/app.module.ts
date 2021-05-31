import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { PostserviceService } from './services/postservice.service';
import { EditpostComponent } from './components/post/editpost/editpost.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    EditpostComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PostserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
