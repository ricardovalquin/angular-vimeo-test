import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';

import {VideoService} from './services/video/video.service';
import {CategoryService} from './services/category/category.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ VideoService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
