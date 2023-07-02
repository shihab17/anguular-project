import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe((data) => {
      console.log("users", data);
      this.users = data;
    })
  }

}
