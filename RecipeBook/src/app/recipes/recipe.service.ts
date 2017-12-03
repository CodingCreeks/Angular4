import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from 'app/recipes/recipe.model';
import { Ingredient } from 'app/shared/ingredient.model';
import { ShoppingListService } from 'app/shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(
            'Summer Salad Recipe',
            'This is simply a test',
            'http://images.media-allrecipes.com/images/59094.jpg',
            [
                new Ingredient('Watermelon', 2),
                new Ingredient('Salt', 1),
                new Ingredient('Peeper', 1),
            ]),

        new Recipe(
            'Winter Salad Recipe',
            'This is simply a test',
            'http://cdn.iowagirleats.com/wp-content/uploads/2013/05/Triple-Berry-Summer-Salad-03_mini.jpg',
            [
                new Ingredient('Avocado', 2),
                new Ingredient('Onions', 2),
                new Ingredient('Green Chills', 2)
            ]),

        new Recipe(
            'Winter Salad Recipe',
            'This is simply a test',
            'http://cdn.iowagirleats.com/wp-content/uploads/2013/05/Triple-Berry-Summer-Salad-13_mini.jpg',
            [
                new Ingredient('Avocado', 2),
                new Ingredient('Onions', 2),
                new Ingredient('Green Chills', 2)

            ]),

        new Recipe(
            'Apple-Brussels Sprouts Salad',
            '1. In a small bowl whisk together vinegar 2. tbsp olive oil, honey, half the parsley, 1/2 tsp salt and 1/4 tsp black pepper. Set aside, Warm a small dry skillet over low heat, toast walnuts until lightly golden, about 1 to 2 minutes. 3. Toss together Brussels sprouts, apples and walnuts with half the dressing. Mix in additional dressing if desired. 4. Transfer to serving platter and top with grated Pecorino and remaining parsley. Serve immediately.',
            'http://del.h-cdn.co/assets/16/50/980x490/landscape-1481823535-unspecified-3.jpg',
            [
                new Ingredient('Red wine vinegar', 2),
                new Ingredient('Extra-virgin olive oil', 2),
                new Ingredient('Honey', 1),
                new Ingredient('Chopped parsley', 1),
                new Ingredient('Kosher salt', 1),
                new Ingredient('Freshly ground black pepper', 1),
                new Ingredient('Chopped walnuts', 1),
                new Ingredient('Brussels sprouts, shredded', 1),
                new Ingredient('Fuji apple, cored and thinly sliced', 1),
                new Ingredient('Freshly grated pecorino', 1),
            ])
    ];

    constructor(private shoppingListService: ShoppingListService) { }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

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
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}
