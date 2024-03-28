import { Component, OnInit } from '@angular/core';
import { Product, ProductAllergen } from 'src/api/models';
import { ProductAllergenService, ProductService } from 'src/api/services';

@Component({
  selector: 'app-product-list',
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = []
  allergens: ProductAllergen[] = []
  isAllergensModalOpen = false
  selectedProduct: Product

  public alertButtons = ['Save'];
  public alertInputs = [
    {
      placeholder: 'Name',
    },
  ];

  constructor(
    private _productService: ProductService,
    private _allergenService: ProductAllergenService
  ) {}

  ngOnInit(){
    this._productService.productList$Response().subscribe({
        next: (response) => {
          this.products = response.body.results!
        },
        error: (e) => {
        },
        complete: () => {
        }
      });

    this._allergenService.productAllergenList$Response().subscribe({
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

  deleteProduct(product: Product, index: number){
    this._productService.productDestroy$Response({id: product.id}).subscribe({
      next: (response) => {
        
      },
      error: (e) => {
      },
      complete: () => {
      }
    });
    this.products = this.products.splice(index, 1);
  }

  updateProduct(product: Product){
    this._productService.productPartialUpdate$Json$Response({
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

  createProduct(event: any){
    const productName = event.detail.data.values['0'];
    this.addProduct(productName)
  }

  addProduct(productName: string){
    this._productService.productCreate$Json$Response(
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

  openAllergensModal(product: Product){
    this.isAllergensModalOpen = true
    this.selectedProduct = product
  }

  applyAllergens(){
    this._productService.productPartialUpdate$Json$Response(
      {id: this.selectedProduct.id, body: this.selectedProduct}
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

  toggleSelectAllergen(allergen: ProductAllergen, index: number){
    if (this.selectedProduct.allergens!.includes(allergen.id)){
      this.selectedProduct.allergens = this.selectedProduct.allergens!.splice(index, 1);
    }else{
      this.selectedProduct.allergens!.push(allergen.id)
    }
    
  }

}
