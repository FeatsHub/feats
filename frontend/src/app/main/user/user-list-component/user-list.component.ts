import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/api/models';
import { UserService } from 'src/api/services';

@Component({
  selector: 'app-user-list',
  templateUrl: 'user-list.component.html',
  styleUrls: ['user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input() users: User[] = []
  @Input() loaded = false
  

  constructor(
    private _userService: UserService,
    private _router: Router
  ) {}

  ngOnInit(){}

  goProfile(userId: number){
    this._router.navigate(['/profile/', userId])
  }

}
