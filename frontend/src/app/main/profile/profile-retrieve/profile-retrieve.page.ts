import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe, RoleEnum, User } from 'src/api/models';
import { RecipeListService, RecipeService, UserService } from 'src/api/services';
import { RecipeList } from 'src/api/models';

interface Tab {
    icon: string,
    tab: string,
    selected: boolean
}

@Component({
  selector: 'app-profile',
  templateUrl: 'profile-retrieve.page.html',
  styleUrls: ['profile-retrieve.page.scss']
})
export class ProfileRetrievePage implements OnInit {
  imageUrl: string | undefined = undefined
  loaded = false
  recipesLoaded = false
  recipesListLoaded = false

  tabs: Tab[] = [
    {
      icon: 'list',
      tab: 'recipes',
      selected: true
    },
    {
      icon: 'bookmark',
      tab: 'saved',
      selected: false
    },
  ] 

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

  myRecipes: Recipe[]
  recipeLists: RecipeList[]

  constructor (
    private _userService: UserService,
    private _router: Router,
    private _recipeListService: RecipeListService,
    private _recipeService: RecipeService
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
        this._recipeService.recipeList$Response({expand: '~all', owner: this.user.id}).subscribe({
          next: (response) => {
            this.myRecipes = response.body.results!
            this.recipesLoaded = true
          },
          error: (e) => {
          },
          complete: () => {
          }
        });

        this._recipeListService.recipeListList$Response(
          {
            expand: '~~all,recipes_data.~all',
            fields: 'id,name,is_default_list,recipes_data.image_data.image',
            owner: this.user.id
          }
          ).subscribe({
          next: (response) => {
            this.recipeLists = response.body.results!
            this.recipesListLoaded = true
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

    this._recipeListService.recipeListCreate$Json$Response(
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

  selectTab(selectedTab: Tab): void {
    this.tabs.forEach(tab => {
        if (tab === selectedTab) {
            tab.selected = true;
        } else {
            tab.selected = false;
        }
    });
  }
  
  isTabSelected(tabName: string): boolean {
    return this.tabs.find(tab => tab.tab === tabName)?.selected ?? false;
  }



}
