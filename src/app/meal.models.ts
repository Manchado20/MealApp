export interface ICategory {
    idCategory: string;
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string;
  }
  
  export interface ICategoryResponse {
    categories: ICategory[];
  }
  
  export interface IMeal {
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
  }
  
  export interface IMealResponse {
    meals: IMeal[];
  }
  
  export interface IMealDetail {
    meals: IMealDetailItem[];
  }
  
  export interface IMealDetailItem {
    idMeal: string;
    strMeal: string;
    strCategory: string;
    strArea: string;
    strInstructions: string;
    strMealThumb: string;
    strTags: string;
  }
  