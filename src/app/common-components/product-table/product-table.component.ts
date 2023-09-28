import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductDetail } from 'src/app/utils/product/product_util';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss'],
  standalone: true,
  imports: [CommonModule,NgOptimizedImage, MatButtonModule, MatIconModule, MatCheckboxModule]
})
export class ProductTableComponent {
  @Input({ required: true }) products: ProductDetail[] = [];
  @Input({required: false}) compareProdcutList: ProductDetail[] = [];
  @Output() cardAction: EventEmitter<{
    productId: string,
    addAction: boolean
  }> = new EventEmitter();
  @Output() addToCompareAction: EventEmitter<{checked: boolean;product: ProductDetail}> = new EventEmitter();

  constructor() {}

  addOrRemoveFromCart(productId: string, addAction: boolean) {
    this.cardAction.emit({
      productId,
      addAction
    })
  }

  checkForSelect(product: ProductDetail) {
    let checked = false;
    if (this.compareProdcutList.length > 0) {
      const isForCheck = this.compareProdcutList.find((productObj) => {
        return productObj.productId === product.productId;
      });
      if (isForCheck) {
        checked = true;
      }
    } else {
      checked = false;
    }
    return checked;
  }

  checkUncheckAddToCompare(event: any, product: ProductDetail) {
    console.log('event.........', event);
    this.addToCompareAction.emit({
      checked: event.checked,
      product: product
    })
  }

}
