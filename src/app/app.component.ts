import { Component } from '@angular/core';

import {VideoService} from './services/video/video.service';
import {Video} from './models/video';
import {Category} from './models/category';
import {CategoryFactory} from './factories/category.factory';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  categories: Promise<Category[]>;
  videos: Promise<Video[]>;

  constructor(private videoService: VideoService, private categoryFactory: CategoryFactory) {
    this.categories = categoryFactory.getCategories().then(categories => {
      console.log(categories);
      return categories;
    });

    this.videos = videoService.getVideosByCategory('comedy', 1).then(videos => {
      console.log(videos);
      return videos;
    });
  }
}
