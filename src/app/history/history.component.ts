import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  searchHistory: string[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    const history = localStorage.getItem('searchHistory');
    if (history) {
      this.searchHistory = JSON.parse(history);
    }
  }

  searchMeal(term: string): void {
    localStorage.setItem('previousSearch', term);
    this.router.navigate(['/index'], { queryParams: { search: term } });
  }
}
