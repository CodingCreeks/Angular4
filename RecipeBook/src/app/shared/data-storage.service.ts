import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs';

import { RecipeService } from "app/recipes/recipe.service";
import { Recipe } from "app/recipes/recipe.model";
import { AuthService } from "app/auth/auth.service";

@Injectable()
export class DataStorageService {

    constructor(
        private http: Http,
        private recipeSerice: RecipeService,
        private authService: AuthService) { }

    storeRecipes() {
        const token = this.authService.getToken();
        return this.http.put('https://recipebook-e33d8.firebaseio.com/recipes.json?auth=' + token, this.recipeSerice.getRecipes());
    }

    getRecipes() {

        const token = this.authService.getToken();

        this.http.get('https://recipebook-e33d8.firebaseio.com/recipes.json?auth=' + token)
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

