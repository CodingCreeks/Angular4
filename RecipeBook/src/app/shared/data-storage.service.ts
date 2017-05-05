import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { RecipeService } from "app/recipes/recipe.service";
import { Recipe } from "app/recipes/recipe.model";

@Injectable()
export class DataStorageService {

    constructor(private http: Http, private recipeSerice: RecipeService) { }

    storeRecipes() {
        return this.http.put('https://recipebook-e33d8.firebaseio.com/recipes.json', this.recipeSerice.getRecipes());
    }

    getRecipes() {
        return this.http.get('https://recipebook-e33d8.firebaseio.com/recipes.json')
            .subscribe(
            (response: Response) => {
                const recipes: Recipe[] = response.json();
                this.recipeSerice.setRecipes(recipes);
            });
    }

}

