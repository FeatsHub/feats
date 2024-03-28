import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Input() allergensSelected: number[]
  @Output() allergensSelectedChange: EventEmitter<number[]> = new EventEmitter<number[]>();

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

  allergenInList(allergenId: number){
    return this.allergensSelected.some(allergen => allergen === allergenId);
  }

  toggleSelect(allergenId: number){
    if (this.allergenInList(allergenId)){
      const index = this.allergensSelected.indexOf(allergenId);
      this.allergensSelected.splice(index, 1);
    }else{
      this.allergensSelected.push(allergenId);
    }
  }

}
