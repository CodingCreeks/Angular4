import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { ShoppingListModule } from 'app/shopping-list/shopping-list.module';
import { SharedModule } from 'app/shared/shared.module';
import { AuthModule } from 'app/auth/auth.module';
import { CoreModule } from 'app/core/core.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    AuthModule,
    CoreModule,
    SharedModule,
    ShoppingListModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
