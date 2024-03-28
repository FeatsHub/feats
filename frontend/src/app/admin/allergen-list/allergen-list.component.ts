import { Component, OnInit } from '@angular/core';
import { ProductAllergen } from 'src/api/models';
import { ProductAllergenService } from 'src/api/services';

@Component({
  selector: 'app-allergen-list',
  templateUrl: 'allergen-list.component.html',
  styleUrls: ['allergen-list.component.scss']
})
export class AllergenListComponent implements OnInit {

  allergens: ProductAllergen[] = []

  public alertButtons = ['Save'];
  public alertInputs = [
    {
      placeholder: 'Name',
    },
    {
      placeholder: 'Emoji',
    },
  ];

  constructor(
    private _allergenService: ProductAllergenService
  ) {}

  ngOnInit(){
    this._allergenService.productAllergenList$Response().subscribe({
      next: (response) => {
        this.allergens = response.body.results!
      },
      error: (e) => {
      },
      complete: () => {
      }
    });
  }

  createAllergen(event: any){
    const allergenName = event.detail.data.values['0'];
    const allergenEmoji = event.detail.data.values['1'];
    this.addAllergen(allergenName, allergenEmoji)
  }

  addAllergen(name: string, emoji: string){
    this._allergenService.productAllergenCreate$Json$Response(
      {body: {
        id: -1,
        name: name,
        emoji: emoji
      }}
    ).subscribe({
      next: (response) => {
        this.allergens.push(response.body);
      },
      error: (e) => {
      },
      complete: () => {
      }
    });
  }

  deleteAllergen(allergen: ProductAllergen, index: number){
    this._allergenService.productAllergenDestroy$Response(
      {id: allergen.id}
    ).subscribe({
      next: (response) => {
      },
      error: (e) => {
      },
      complete: () => {
        this.allergens.splice(index, 1);
      }
    });
  }

  saveAllergen(allergen: ProductAllergen){
    this._allergenService.productAllergenPartialUpdate$Json$Response(
      {id: allergen.id, body: allergen}
    ).subscribe({
      next: (response) => {
      },
      error: (e) => {
      },
      complete: () => {
      }
    });
  }

}
