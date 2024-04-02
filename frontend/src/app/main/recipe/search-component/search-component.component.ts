import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Recipe, User } from 'src/api/models';
import { RecipeService, UserService } from 'src/api/services';

interface Tab {
  icon: string,
  tab: string,
  selected: boolean
}

@Component({
  selector: 'app-search-component',
  templateUrl: 'search-component.component.html',
  styleUrls: ['search-component.component.scss']
})
export class SearchComponent implements OnInit {

  @ViewChild('searchBar') searchBar: ElementRef;
  @Output() closeModalEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  searchedText: string
  recipes: Recipe[]
  recipesLoaded = false
  users: User[]
  usersLoaded = false

  tabs: Tab[] = [
    {
      icon: 'pizza',
      tab: 'recipes',
      selected: true
    },
    {
      icon: 'people',
      tab: 'users',
      selected: false
    },
  ] 

  constructor(
    private _recipeService: RecipeService,
    private _userService: UserService
  ) {}

  ngOnInit(){
    this.searchRecipes()
    this.searchUsers()
  }

  async ngAfterViewInit() {
    /*setTimeout(() => {
      this.searchBar.nativeElement.focus();
    }, 1000);*/
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

  handleSearch(event: any){
    this.searchedText = event.detail.value
    this.searchRecipes()
    this.searchUsers()
  }

  closeModal(){
    this.closeModalEvent.emit(true);
  }

  searchRecipes(){
    this._recipeService.recipeList$Response(
      {
        search: this.searchedText,
        expand: '~all,creator.~all'
      }
    ).subscribe(
      {
        next: (response) => {
          this.recipes = response.body.results!
        },
        complete: () => {
          this.recipesLoaded = true
        }
      }
    )
  }

  searchUsers(){
    this._userService.userList$Response(
      {
        search: this.searchedText,
        expand: '~all'
      }
    ).subscribe(
      {
        next: (response) => {
          this.users = response.body.results!
        },
        complete: () => {
          this.usersLoaded = true
        }
      }
    )
  }
}
