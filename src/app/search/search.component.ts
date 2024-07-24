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

    // Verificar si hay una búsqueda pasada desde el historial
    const previousSearch = localStorage.getItem('previousSearch');
    if (previousSearch) {
      this.searchTerm = previousSearch;
      this.searchMeals();
      localStorage.removeItem('previousSearch');
    }
  }

  searchMeals(): void {
    if (this.searchTerm) {
      this.mealService.getMealByName(this.searchTerm).subscribe(data => {
        this.meals = data.meals;
        this.selectedCategory = '';

        // Guardar la búsqueda en el historial
        this.saveSearchToHistory(this.searchTerm);
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

  private saveSearchToHistory(searchTerm: string): void {
    let searchHistory = JSON.parse(localStorage.getItem('searchHistory') || '[]');
    searchHistory = [searchTerm, ...searchHistory].slice(0, 10); // Guardar hasta 10 búsquedas
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  }
}
