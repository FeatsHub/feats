import { Component, OnInit } from '@angular/core';
import { Food, FoodAllergen } from 'src/api/models';
import { FoodAllergenService, FoodService } from 'src/api/services';

@Component({
  selector: 'app-product-list',
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.scss']
})
export class FoodListComponent implements OnInit {

  products: Food[] = []
  allergens: FoodAllergen[] = []
  isAllergensModalOpen = false
  selectedFood: Food

  public alertButtons = ['Save'];
  public alertInputs = [
    {
      placeholder: 'Name',
    },
  ];

  constructor(
    private _productService: FoodService,
    private _allergenService: FoodAllergenService
  ) {}

  ngOnInit(){
    this._productService.foodList$Response().subscribe({
        next: (response) => {
          this.products = response.body.results!
        },
        error: (e) => {
        },
        complete: () => {
        }
      });

    this._allergenService.foodAllergenList$Response().subscribe({
      next: (response) => {
        this.allergens = response.body.results!
        console.log(response)
      },
      error: (e) => {
      },
      complete: () => {
      }
    });
  }

  deleteFood(product: Food, index: number){
    this._productService.foodDestroy$Response({id: product.id}).subscribe({
      next: (response) => {
        
      },
      error: (e) => {
      },
      complete: () => {
        this.products.splice(index, 1);
      }
    });
  }

  updateFood(product: Food){
    this._productService.foodPartialUpdate$Json$Response({
      id: product.id, body: product
    }).subscribe({
      next: (response) => {
        
      },
      error: (e) => {
      },
      complete: () => {
      }
    });
  }

  createFood(event: any){
    const productName = event.detail.data.values['0'];
    this.addFood(productName)
  }

  addFood(productName: string){
    this._productService.foodCreate$Json$Response(
      {
        body: {
          id: -1,
          name: productName
        }
      }
    ).subscribe({
      next: (response) => {
        this.products.push(response.body);
      },
      error: (e) => {
      },
      complete: () => {
      }
    });
  }

  openAllergensModal(product: Food){
    this.isAllergensModalOpen = true
    this.selectedFood = product
  }

  applyAllergens(){
    this._productService.foodPartialUpdate$Json$Response(
      {id: this.selectedFood.id, body: this.selectedFood}
    ).subscribe({
      next: (response) => {
      },
      error: (e) => {
      },
      complete: () => {
        this.isAllergensModalOpen = false
      }
    });
  }

  toggleSelectAllergen(allergen: FoodAllergen, index: number){
    if (this.selectedFood.allergens!.includes(allergen.id)){
      this.selectedFood.allergens = this.selectedFood.allergens!.splice(index, 1);
    }else{
      this.selectedFood.allergens!.push(allergen.id)
    }
    
  }

}
