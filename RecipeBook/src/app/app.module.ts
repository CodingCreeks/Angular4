import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { RecipeService } from './recipes/recipe.service';
import { DataStorageService } from "app/shared/data-storage.service";
import { AuthService } from "app/auth/auth.service";
import { AuthGuard } from "app/auth/auth-guard.service";
import { RecipesModule } from "app/recipes/recipes.module";
import { ShoppingListModule } from "app/shopping-list/shopping-list.module";
import { SharedModule } from "app/shared/shared.module";
import { AuthModule } from "app/auth/auth.module";
import { CoreModule } from "app/core/core.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    RecipesModule,
    SharedModule,
    ShoppingListModule,
    AuthModule,
    CoreModule
  ],
  providers: [ ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
