import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeList } from 'src/api/models';
import { RecipeListService } from 'src/api/services';

@Component({
  selector: 'app-profile-saved-lists',
  templateUrl: 'profile-recipe-lists.component.html',
  styleUrls: ['profile-recipe-lists.component.scss']
})
export class ProfileRecipeListsComponent implements OnInit {

  @Input({required: true}) owner: number;
  loaded: boolean = false;
  refreshing: boolean = false

  lists: RecipeList[] = []


  public alertButtons = [
    {
      text: 'Cancelar',
      role: 'cancel',
    },
    {
      text: 'Guardar',
      role: 'confirm',
    },
  ];
  public alertInputs = [
    {
      placeholder: 'Nombre',
    },
  ];

  constructor (
    private _recipeListService: RecipeListService,
    private _router: Router,
  ) {
  }

  ngOnInit() {
    this.getLists();
  }

  
  getLists(event: any = undefined){
    this.loaded = false;
    this._recipeListService.recipeListList(
      {
        expand: '~~all,recipes_data.~all',
        fields: 'id,name,is_default_list,recipes_data.image_data.image',
        owner: this.owner,
        limit: 5,
        offset: this.refreshing ? 0 : this.lists.length
      }
      ).subscribe({
      next: (lists) => {
        if (!this.refreshing){
          this.lists =  [...this.lists, ...lists.results!];
        }else{
          this.lists = lists.results!;
        }
      },
      complete: () => {
        event?.target.complete();

        // Recipes already loaded
        this.loaded = true;

        // End of refreshing if it was
        if (this.refreshing){
          this.refreshing = false;
        }
      }
    });
  }

  setResult(ev: any) {
    if (ev.detail.role != 'backdrop' && ev.detail.role != 'cancel'){
      const listName = ev.detail.data.values['0']

      this._recipeListService.recipeListCreate$Json$Response(
        {
          expand: '~all',
          body: {
            id: -1,
            name: listName,
            owner: this.owner,
            recipes: [],
            recipes_data: []
          }
        }
      ).subscribe({
          next: (response) => {
            this.lists.push(response.body)
          },
          error: (e) => {
          },
          complete: () => {
          }
        });
    }
  }

  goList(id: number){
    this._router.navigate(['/profile/recipes/' + id]);
  }

  handleRefresh(e: any){
    this.refreshing = true;
    this.loaded = false;
    this.getLists(e);
  }
}
