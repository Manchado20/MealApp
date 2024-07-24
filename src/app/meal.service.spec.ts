import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MealService } from './meal.service';

describe('MealService', () => {
  let service: MealService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MealService]
    });
    service = TestBed.inject(MealService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should retrieve categories from API', () => {
    const dummyCategories = {
      categories: [{ strCategory: 'Beef' }, { strCategory: 'Chicken' }]
    };

    service.getCategories().subscribe(categories => {
      expect(categories.categories.length).toBe(2);
      expect(categories.categories).toEqual(dummyCategories.categories);
    });

    const req = httpMock.expectOne(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyCategories);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
