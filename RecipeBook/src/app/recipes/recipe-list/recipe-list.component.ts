import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','Test Description','http://www.seriouseats.com/recipes/assets_c/2016/03/20160329-schug-yemenite-hot-sauce-falafel-recipe-11-thumb-1500xauto-430815.jpg'),
    new Recipe('A Test Recipe','Test Description','http://www.seriouseats.com/recipes/assets_c/2016/03/20160329-schug-yemenite-hot-sauce-falafel-recipe-11-thumb-1500xauto-430815.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
