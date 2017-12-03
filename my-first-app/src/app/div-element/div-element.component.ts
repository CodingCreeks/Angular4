import { element } from 'protractor';
import { FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { error } from 'selenium-webdriver';

@Component({
  selector: 'app-div-element',
  templateUrl: './div-element.component.html',
  styleUrls: ['./div-element.component.css']
})
export class DivElementComponent implements OnInit {

  @ViewChild('f1') testForm: NgForm;

  name = 'firstName';
  country = 'country';
  error = [];

  constructor() { }

  ngOnInit() {
  }

  submit() {
    // console.log(this.testForm);
    // this.testForm.controls.c1.valid

    if (this.testForm.submitted) {
      // tslint:disable-next-line:forin
      for (const key in this.testForm.controls) {
        const element = this.testForm.controls[key];
        if (!element.valid) {
          this.error.push({ name: key, data: element });
        }
      }

      this.error.forEach(obj => {
        console.log(obj.name);
        console.log(obj.data);
      });

      console.log(this.error);

    }
  }
}
