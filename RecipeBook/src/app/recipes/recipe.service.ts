import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

import { Recipe } from "app/recipes/recipe.model";
import { Ingredient } from "app/shared/ingredient.model";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe('Summer Salad Recipe', 'This is simply a test', 'http://images.media-allrecipes.com/images/59094.jpg', [
            new Ingredient('Watermelon', 2),
            new Ingredient('Salt', 1),
            new Ingredient('Peeper', 1),

        ]),
        new Recipe('Winter Salad Recipe', 'This is simply a test', 'http://cdn.iowagirleats.com/wp-content/uploads/2013/05/Triple-Berry-Summer-Salad-03_mini.jpg', [
            new Ingredient('Avocado', 2),
            new Ingredient('Onions', 2),
            new Ingredient('Green Chills', 2)

        ]),
        new Recipe('Winter Salad Recipe', 'This is simply a test', 'http://cdn.iowagirleats.com/wp-content/uploads/2013/05/Triple-Berry-Summer-Salad-13_mini.jpg', [
            new Ingredient('Avocado', 2),
            new Ingredient('Onions', 2),
            new Ingredient('Green Chills', 2)

        ])
    ];

    constructor(private shoppingListService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientTOShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
    }
}