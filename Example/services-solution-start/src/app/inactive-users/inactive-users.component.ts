import { Component, EventEmitter, OnInit, DoCheck } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit, DoCheck {
  users: string[];
  inActiveUsers: number;

  constructor(private userService: UsersService) {
  }

  ngOnInit() {
    this.users = this.userService.inactiveUsers;
    // this.inActiveUsers = this.userService.inActiveUserCount;
  }

  ngDoCheck() {
    // console.log('ngDoCheck called..!');
    // console.log('InactiveUsers : '+this.users.length);
    this.inActiveUsers=this.users.length;
  }

  onSetToActive(id: number) {
    this.userService.setToActive(id);
  }
}
