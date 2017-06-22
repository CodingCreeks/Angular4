import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { ImageService } from './../shared/image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css'],
  providers: [ImageService]
})
export class ImageListComponent implements OnInit {
  imageFound: boolean;
  images: any[];
  searching: boolean = false;
  constructor(private imageService: ImageService) { }

  handleSuccess(data) {
    this.imageFound = true;
    this.images = data.hits;
    console.log(data.hits);
  }
  handleError(error) {
    console.log(error);
  }

  ngOnInit() {
  }

  searchImages(query: string) {
    this.searching = true;
    return this.imageService.getImage(query).subscribe(
      data => this.handleSuccess(data),
      error => this.handleError(error),
      () =>this.searching=false
    )
  }
}
