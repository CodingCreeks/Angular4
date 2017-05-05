import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs';

import { RecipeService } from "app/recipes/recipe.service";
import { Recipe } from "app/recipes/recipe.model";

@Injectable()
export class DataStorageService {

    constructor(private http: Http, private recipeSerice: RecipeService) { }

    storeRecipes() {
        return this.http.put('https://recipebook-e33d8.firebaseio.com/recipes.json', this.recipeSerice.getRecipes());
    }

    getRecipes() {
        this.http.get('https://recipebook-e33d8.firebaseio.com/recipes.json')
            .map(
            (response: Response) => {
                const recipes: Recipe[] = response.json();
                for (let recipe of recipes) {
                    if (!recipe['ingredients']) {
                        console.log(recipe);
                        recipe['ingredients'] = []
                    }
                }
                return recipes;
            }
            )
            .subscribe(
            (recipes: Recipe[]) => {
                this.recipeSerice.setRecipes(recipes);
            });
    }

}

