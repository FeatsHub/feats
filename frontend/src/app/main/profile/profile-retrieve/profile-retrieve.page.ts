import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleEnum, User } from 'src/api/models';
import { RecipeListService, UserService } from 'src/api/services';
import { RecipeList } from 'src/api/models';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile-retrieve.page.html',
  styleUrls: ['profile-retrieve.page.scss']
})
export class ProfileRetrievePage implements OnInit {
  imageUrl: string | undefined = undefined
  loaded = false

  public alertButtons = ['Save'];
  public alertInputs = [
    {
      placeholder: 'Nombre',
    },
  ];

  menuButtons = [
    {
      text: 'Settings',
      role: 'settings',
    },
    {
      text: 'Edit profile',
      role: 'edit',
    },
    {
      text: 'Log out',
      role: 'logout',
    }
  ];

  user: User = {
    deactivation_datetime: null,
    email: '',
    first_name: null,
    id: -1,
    is_active: true,
    last_bad_login_attempt_datetime: null,
    last_name: null,
    login_attempts: 0,
    password: '',
    phone: null,
    role: RoleEnum['User'],
    username: '',
    has_login_blocked: 'false',
    image_data: {
      id: -1,
      image: undefined
    }
  }

  recipeLists: RecipeList[]

  constructor (
    private _userService: UserService,
    private _router: Router,
    private _recipeList: RecipeListService
  ) {
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this._userService.userCurrentRetrieve$Response({expand: '~all'}).subscribe({
      next: (response) => {
        this.user = response.body
        this.loaded = true
        this.imageUrl = this.user.image_data.image!
      },
      error: (e) => {
      },
      complete: () => {
        this._recipeList.recipeListList$Response(
          {
            expand: '~~all,recipes_data.~all',
            fields: 'id,name,is_default_list,recipes_data.image_data.image',
            owner: this.user.id
          }
          ).subscribe({
          next: (response) => {
            this.recipeLists = response.body.results!
          },
          error: (e) => {
          },
          complete: () => {
          }
        });
      }
    });

  }

  profileMenuResult(event: any){
    if (event.detail.role == 'logout'){
      this.logOut()
    } else if (event.detail.role == 'edit'){
      this._router.navigate(['/profile/edit']);
    } else if (event.detail.role == 'settings'){
      this._router.navigate(['/settings']);
    }
  }

  logOut(){
    this._userService.userLogoutCreate$Json$Response().subscribe({
      next: (response) => {
      },
      error: (e) => {
      },
      complete: () => {
        localStorage.removeItem('accessToken')
        this._router.navigate(['/recipes']);
      }
    });
  }

  setResult(ev: any) {
    const listName = ev.detail.data.values['0']

    this._recipeList.recipeListCreate$Json$Response(
      {
        body: {
          id: -1,
          name: listName,
          owner: this.user.id,
          recipes: [],
          recipes_data: []
        }
      }
    ).subscribe({
        next: (response) => {
          this.recipeLists.push(response.body)
          console.log(this.recipeLists)
        },
        error: (e) => {
        },
        complete: () => {
        }
      });
  }

  goList(id: number){
    this._router.navigate(['/profile/recipes/' + id]);
  }


}
