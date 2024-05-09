import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe, RoleEnum, User } from 'src/api/models';
import { RecipeListService, RecipeService, UserService } from 'src/api/services';
import { RecipeList } from 'src/api/models';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { Subscription, expand } from 'rxjs';

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

  routeSub: Subscription
  imageUrl: string | null = null
  loaded = false
  recipesLoaded = false
  recipesListLoaded = false
  limit = 5
  offset = 0

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

  isActionSheetOpen = false

  constructor (
    private _userService: UserService,
    private _router: Router,
    private _recipeListService: RecipeListService,
    private _recipeService: RecipeService,
    private _route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.routeSub = this._route.params.subscribe(params => {
      // 🚩 Edit Mode and take the recipe from api
      if (params['id'] != undefined){
        this._userService.userRetrieve$Response({
          id: params['id'], expand: '~all'
        }).subscribe({
          next: (response) =>{
            this.user = response.body
            this.loaded = true
            if (this.user.image_data){
              this.imageUrl = this.user.image_data.image!
            }
          },
          error: () => {
            this._router.navigate(['/recipes']);
          },
          complete: () => {
            this.getOwnRecipes()
          }
        });
      }else {
        this.getCurrentUser();
      }
    })
  }

  getCurrentUser(){
    this._userService.userCurrentRetrieve$Response({expand: '~all'}).subscribe({
      next: (response) => {
        this.user = response.body
        this.loaded = true

        if (this.user.image_data){
          this.imageUrl = this.user.image_data.image!
        }

        if (this.user.role == RoleEnum.Superadmin && this.menuButtons.find(item => item.role === 'admin') == undefined){
          this.menuButtons.unshift({
            text: 'Admin',
            role: 'admin',
          })
        }
      },
      error: (e) => {
      },
      complete: () => {
        this.getOwnRecipes()
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
        this.recipesListLoaded = true
      },
      error: (e) => {
      },
      complete: () => {
      }
    });
  }

  ionViewDidLeave(){
    this.myRecipes = []
  }

  getOwnRecipes(){
    this._recipeService.recipeList$Response(
      {
        expand: '~all,creator.~all',
        owner: this.user.id,
        limit: this.limit,
        offset: this.offset
      }
    ).subscribe(
      {
        next: (response) => {
          if (this.myRecipes){
            this.myRecipes = this.myRecipes.concat(response.body.results!)
          }else{
            this.myRecipes = response.body.results!
          }
          this.recipesLoaded = true
          },
        error: (e) => {},
        complete: () => {}
      }
    );
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

  handleInfiniteScroll(event: any){
    this.offset = this.offset + 10
    this.getOwnRecipes();
  }

  isOwn(){
    return localStorage.getItem('userId') == this.user.id.toString()
  }

  setOpen(isOpen: boolean) {
    this.isActionSheetOpen = isOpen;
  }

  ionViewWillLeave(){
    this.myRecipes = []
  }

}
