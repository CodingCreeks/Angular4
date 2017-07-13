import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import 'hammerjs';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PopularComponent } from './popular/popular.component';
import { ContactsService } from './contacts.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    PopularComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
