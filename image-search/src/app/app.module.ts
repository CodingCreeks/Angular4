import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { MasonryModule } from 'angular2-masonry';

import { AppComponent } from './app.component';
import { ImageListComponent } from './image-list/image-list.component';

import { ImageService } from './shared/image.service';

@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,    
    MaterialModule,
    MasonryModule,
    BrowserAnimationsModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
