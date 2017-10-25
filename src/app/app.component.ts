import { Component } from '@angular/core';

import {VideoService} from './services/video/video.service';
import {Video} from './models/video';
import {Category} from './models/category';
import {CategoryService} from './services/category/category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  categories: Promise<Category[]>;
  videos: Promise<Video[]>;

  constructor(private videoService: VideoService, private categoryService: CategoryService) {
    this.categories = categoryService.getAllCategories().then(categories => {
      console.log(categories);
      return categories;
    });

    this.videos = videoService.getVideosByCategory('comedy', 1).then(videos => {
      console.log(videos);
      return videos;
    });
  }
}
