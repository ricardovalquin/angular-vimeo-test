import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { vimeoAPIConfig } from '../constants/environment-constants';

@Injectable()
export class VideoService {

  private apiConfig = vimeoAPIConfig;

  constructor(private http: Http) { }

  getVideosByCategory(category: string, page: number): Promise<any[]> {
    return this.http.get(`${this.apiConfig['apiBaseUrl']}categories/${category}/videos?page=${page}&per_page=
    ${this.apiConfig['perPage']}&access_token=${this.apiConfig['accessToken']}`)
      .toPromise()
      .then(response => response.json().data);
  }

}
