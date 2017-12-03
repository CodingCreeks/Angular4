import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isYesSelected: boolean = false;

    enable(boolean) {
      return this.isYesSelected = boolean;
    }

}
