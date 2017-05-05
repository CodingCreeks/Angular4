import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import { RecipeService } from "app/recipes/recipe.service";

@Injectable()
export class DataStorageService {

    constructor(private http: Http, private recipeSerice: RecipeService) { }

    storeRecipes() {
        return this.http.put('https://recipebook-e33d8.firebaseio.com/recipes.json', this.recipeSerice.getRecipes());
    }

}

