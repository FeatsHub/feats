import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { ProductAllergen } from 'src/api/models';
import { ProductAllergenService } from 'src/api/services';

@Component({
  selector: 'app-allergens-check',
  templateUrl: './allergen-list.component.html',
  styleUrls: ['./allergen-list.component.scss'],
})
export class AllergenChecksComponent  implements OnInit {

  allergens: ProductAllergen[]
  allergenSelecteds: number[]

  constructor(
    private _allergenService: ProductAllergenService
  ) { }

  ngOnInit() {
    this._allergenService.productAllergenList$Response().subscribe(
      {
        next: (response) => {
          this.allergens = response.body.results!
        },
        error: (e) =>{

        },
        complete: () => {

        }
      }
    )
  }

  allergenInList(allergen: number){
    return true
  }

}
