import { EventEmitter, Injectable } from "@angular/core";

import { Recipe } from "app/recipes/recipe.model";
import { Ingredient } from "app/shared/ingredient.model";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

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

    getRecipe(index: number){
        return this.recipes[index];
    }

    addIngredientTOShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}