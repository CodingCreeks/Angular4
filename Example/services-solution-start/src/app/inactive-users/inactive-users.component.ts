import { Component, EventEmitter, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];
  inActiveUsers: number;

  constructor(private userService: UsersService) {
  }

  ngOnInit() {
    this.users = this.userService.inactiveUsers;
    this.inActiveUsers = this.userService.inActiveUserCount;
  }

  onSetToActive(id: number) {
    this.userService.setToActive(id);
  }
}
