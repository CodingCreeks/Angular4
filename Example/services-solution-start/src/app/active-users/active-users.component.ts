import { Component, OnInit, DoCheck } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit, DoCheck {
  users: string[];
  activeUsers: number;

  constructor(private userService: UsersService) {
  }

  ngOnInit() {
    this.users = this.userService.activeUsers;
    // this.activeUsers = this.userService.activeUserCount;
  }

  ngDoCheck() {
    // console.log('ngDoCheck called..!');
    // console.log('ActiveUsers : '+this.users.length);
    this.activeUsers = this.users.length;
  }

  onSetToInactive(id: number) {
    this.userService.setToInActive(id);
  }
}
