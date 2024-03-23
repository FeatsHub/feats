import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleEnum, User } from 'src/api/models';
import { UserService } from 'src/api/services';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})
export class StatsPage implements OnInit {

  user: User | undefined

  constructor(
    private _userService: UserService,
    private _router: Router
  ) { }

  ngOnInit() {
    if (localStorage.getItem('userId')){
      this._userService.userCurrentRetrieve$Response({expand: '~all'}).subscribe({
        next: (response) => {
          this.user = response.body
          if (this.user.role != RoleEnum.Superadmin){
            this._router.navigate(['/recipes'])
          }
        },
        error: (e) => {
        },
        complete: () => {
        }
      })
    }
  }
}
