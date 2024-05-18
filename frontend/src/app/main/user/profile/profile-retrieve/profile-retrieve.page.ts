import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe, RoleEnum, User } from 'src/api/models';
import { RecipeListService, RecipeService, UserService } from 'src/api/services';
import { RecipeList } from 'src/api/models';
import { Subscription } from 'rxjs';
import { ProfileRecipesComponent } from './components/profile-recipes-component/profile-recipes.component';

interface Tab {
    icon: string,
    tab: string,
    selected: boolean
}

@Component({
  selector: 'app-profile',
  templateUrl: 'profile-retrieve.page.html',
  styleUrls: ['profile-retrieve.page.scss'],
})
export class ProfileRetrievePage implements OnInit {

  loaded = false
  userId: number
  user: User

  recipeLists: RecipeList[]
  isActionSheetOpen = false

  // Tabs components
  @ViewChild('publicRecipes') publicRecipesComponent: ProfileRecipesComponent
  @ViewChild('privateRecipes') privateRecipesComponent: ProfileRecipesComponent

  tabs: Tab[] = [
    {
      icon: 'list',
      tab: 'recipes',
      selected: true
    },
    {
      icon: 'eye-off',
      tab: 'hidden',
      selected: false
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
      text: 'Ajustes',
      role: 'settings',
    },
    {
      text: 'Editar perfil',
      role: 'edit',
    },
    {
      text: 'Cerrar Sesión',
      role: 'logout',
    }
  ];

  constructor (
    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _recipeListService: RecipeListService
  ) {
  }

  ngOnInit() {
    this._route.params.subscribe(
      params => {
        // If there isn't user in query param takes current user
        this.userId = params['id'] ? params['id'] : localStorage.getItem('userId')
        this.getUser(this.userId)
      }
    )
  }

  getUser(userId: number){
    this._userService.userRetrieve(
      {
        expand: '~all',
        id: this.userId
      }
    ).subscribe(
      {
        next: (user) => {
          this.user = user
          this.loaded = true

          if (this.user.role == RoleEnum.Superadmin && this.menuButtons.find(item => item.role === 'admin') == undefined){
            this.menuButtons.unshift({
              text: 'Admin',
              role: 'admin',
            })
          }
        },
      error: (e) => {},
      complete: () => {
        //this.getOwnRecipes()
        //this.getHiddenRecipes()
        this.getOwnLists()
      }
    });
  }

  getOwnLists(){
    this._recipeListService.recipeListList$Response(
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

  profileMenuResult(event: any){
    this.isActionSheetOpen = false
    if (event.detail.role == 'logout'){
      this.logOut()
    } else if (event.detail.role == 'edit'){
      this._router.navigate(['/profile/edit']);
    } else if (event.detail.role == 'settings'){
      this._router.navigate(['/settings']);
    }
    else if (event.detail.role == 'admin'){
      this._router.navigate(['/admin']);
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

  itsMe(){
    return this.userId == this.user.id
  }

  setOpen(isOpen: boolean) {
    this.isActionSheetOpen = isOpen;
  }

  handleRefresh(event: any){
    this.publicRecipesComponent?.handleRefresh(event);
    this.privateRecipesComponent?.handleRefresh(event);
  }

}
