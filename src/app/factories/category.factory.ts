import {Injectable} from '@angular/core';

import {Category} from '../models/category';
import {CategoryService} from '../services/category/category.service';

@Injectable()
export class CategoryFactory {

  private categories: Category[];

  constructor(private categoryService: CategoryService) {}

  getCategories(): Promise<Category[]> {
    if (this.categories) {
      return Promise.resolve(this.categories);
    }
    return this.categoryService.getAllCategories().then(categories => {
      this.categories = this.formatCategories(categories);
      return this.categories;
    });
  }

  formatCategories(categories: Category[]): Category[] {
    if (categories.length > 0) {
      return categories.map(function (category) {
        const uri = category.uri.split('/');
        category['id'] = uri[2];
        return category;
      });
    } else {
      return [];
    }
  }
}
