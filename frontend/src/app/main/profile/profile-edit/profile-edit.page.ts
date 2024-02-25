import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleEnum, User } from 'src/api/models';
import { UserService } from 'src/api/services';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile-edit.page.html',
  styleUrls: ['profile-edit.page.scss']
})
export class ProfileEditPage implements OnInit {

  constructor (
    private _userService: UserService,
    private _router: Router
  ) {
  }

  ngOnInit() {
  }

}
