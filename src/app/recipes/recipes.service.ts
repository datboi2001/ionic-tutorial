import { Injectable } from '@angular/core';
import {Recipe} from "./recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [{
    id: 'r1',
    title: 'Schnitzel',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
    ingredients: ['French Fries', 'Pork Meat', 'Salad']
  }, {
    id: 'r2',
    title: 'Miso soup',
    imageUrl: 'https://www.justonecookbook.com/wp-content/uploads/2022/06/Miso-Soup-8271-II-768x1152.jpg',
    ingredients: ['Miso', 'Water', 'Noodles', 'Vegetables']
  }];
  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string): Recipe {
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })} as Recipe;
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
