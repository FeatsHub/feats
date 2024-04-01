import { Component, OnInit } from '@angular/core';
import { User } from 'src/api/models';
import { UserService } from 'src/api/services';

@Component({
  selector: 'app-user-list',
  templateUrl: 'user-list.component.html',
  styleUrls: ['user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[]

  constructor(
    private _userService: UserService
  ) {}

  ngOnInit(){
    this._userService.userList$Response(
      {
        expand: '~all'
      }
    ).subscribe(
      {
        next: (response) => {
          this.users = response.body.results!
        },
      }
    )
  }

}
