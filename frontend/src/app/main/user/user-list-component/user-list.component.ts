import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private _userService: UserService,
    private _router: Router
  ) {}

  ngOnInit(){}

  goProfile(userId: number){
    this.closeModal.emit(true)
    this._router.navigate(['/profile/', userId])
  }

}
