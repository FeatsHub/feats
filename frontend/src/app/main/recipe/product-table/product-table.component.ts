import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/api/models';
import { ProductService } from 'src/api/services';

@Component({
  selector: 'app-product-table',
  templateUrl: 'product-table.component.html',
  styleUrls: ['product-table.component.scss']
})
export class ProductTableComponent implements OnInit {

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
