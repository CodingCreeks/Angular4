import { Component, OnInit } from '@angular/core';

import { ImageService } from '../shared/image.service';

@Component({
  selector: 'app-image',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

  constructor(private imiageService: ImageService) { }

  ngOnInit() {
  }

}
