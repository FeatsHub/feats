import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/api/models';
import { ProductService } from 'src/api/services';

@Component({
  selector: 'app-product-list',
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() products: Product[] = []
  @Input() loaded = false

  constructor(
    private _productService: ProductService
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
  }

}
