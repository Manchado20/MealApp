import { Component, OnInit } from '@angular/core';
import { MealService } from '../meal.service';
import { Router } from '@angular/router';
import { ICategory, IMeal } from '../meal.models';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm: string = '';
  selectedCategory: string = '';
  categories: ICategory[] = [];
  meals: IMeal[] = [];
  category: string = '';

  constructor(private mealService: MealService, private router: Router) {}

  ngOnInit(): void {
    this.mealService.getCategories().subscribe(data => {
      this.categories = data.categories;
    });
  }

  searchMeals(): void {
    if (this.searchTerm) {
      this.mealService.getMealByName(this.searchTerm).subscribe(data => {
        this.meals = data.meals;
        this.selectedCategory = '';
      });
    }
  }

  searchMealsByCategory(): void {
    if (this.selectedCategory) {
      this.mealService.getMealsByCategory(this.selectedCategory).subscribe(data => {
        this.meals = data.meals;
        this.searchTerm = '';
        this.category = this.selectedCategory;
      });
    }
  }

  clearCategory(): void {
    this.selectedCategory = '';
  }

  viewDetails(id: string): void {
    this.router.navigate(['/details', id]);
  }
}
