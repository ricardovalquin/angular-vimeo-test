import { Component } from '@angular/core';
import {VideoService} from './services/video.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  videos: any = [];
  constructor(private videoService: VideoService) {
    this.videos = videoService.getVideosByCategory('comedy', 1).then(videos => videos);
  }
}
