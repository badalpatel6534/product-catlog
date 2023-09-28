import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CompareProductDetailsComponent } from 'src/app/common-components/compare-product-details/compare-product-details.component';
import { MatSelectSearchComponent } from 'src/app/common-components/mat-select-search/mat-select-search.component';
import { ProductData, ProductDetail } from 'src/app/utils/product/product_util';
import { MediaObserver } from '@angular/flex-layout';
import { ProductFilterPipe } from 'src/app/pipes/product-filter.pipe';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-compare-product',
  templateUrl: './compare-product.component.html',
  styleUrls: ['./compare-product.component.scss'],
  standalone: true,
  imports: [
    FlexLayoutModule,
    CommonModule,
    MatSelectSearchComponent,
    CompareProductDetailsComponent,
    ProductFilterPipe,
  ],
})
export class CompareProductComponent {
  products = [] as Array<ProductDetail>;
  // selectedProducts = [] as Array<ProductDetail>;
  selectedProductIds: Array<string> = [];
  compareProducts: Array<ProductDetail | null> = [null, null, null];

  constructor(public mediaObserver: MediaObserver, private router: Router) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.compareProducts = this.router.getCurrentNavigation().extras.state['selectedCompareProdcutList'];
      // this.selectedProducts = this.compareProducts;
      this.selectedProductIds = this.compareProducts.map((productObj) => productObj.productId);
      console.log('this.compareProducts', this.compareProducts);
    } 
      this.products = [...ProductData];
  }

  onSelectItem(event: any, compareNumber: number) {
    this.compareProducts[compareNumber] = event;
    this.selectedProductIds[compareNumber] = event.productId;
  }
}
