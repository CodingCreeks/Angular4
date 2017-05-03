import { Component, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('myForm') signUpForm: NgForm;
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  selectedSubscription = 'Advanced';

  userData = {
    email: '',
    subscription: '',
    password: ''
  };

  onSubmit(form: NgForm) {
    console.log(this.signUpForm.value);
    this.userData.email = this.signUpForm.value.email;
    this.userData.subscription = this.signUpForm.value.subscriptions;
    this.userData.password = this.signUpForm.value.password;
  }
}
