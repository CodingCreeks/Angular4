import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AlertComponent } from './alert/alert.component';
import { SuccessComponent } from './alert/success/success.component';
import { DangerComponent } from './alert/danger/danger.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    SuccessComponent,
    DangerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
