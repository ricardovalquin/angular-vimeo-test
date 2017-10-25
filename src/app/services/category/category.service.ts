import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { vimeoAPIConfig } from '../../constants/environment-constants';
import {Category} from '../../models/category';


@Injectable()
export class CategoryService {

  private apiConfig = vimeoAPIConfig;

  constructor(private http: Http) { }

  getAllCategories(): Promise<Category[]> {
    return this.http.get(`${this.apiConfig['apiBaseUrl']}categories?access_token=${this.apiConfig['accessToken']}`)
      .toPromise()
      .then(response => response.json().data);
  }

}
