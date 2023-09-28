import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductDetail } from 'src/app/utils/product/product_util';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  standalone: true,
  imports: [CommonModule, FlexLayoutModule, NgOptimizedImage, MatCardModule, MatIconModule, MatButtonModule, MatCheckboxModule],
})
export class ProductCardComponent {
  @Input({ required: true }) product: ProductDetail = null;
  @Input({required: false}) compareProdcutList: ProductDetail[] = null;
  @Output() cardAction: EventEmitter<{productId: string;addAction: boolean}> = new EventEmitter();
  @Output() addToCompareAction: EventEmitter<{checked: boolean;product: ProductDetail}> = new EventEmitter();
  constructor() {}
  ngOnInit(): void {}

  addOrRemoveFromCart(productId: string, addAction: boolean) {
    this.cardAction.emit({
      productId,
      addAction,
    });
  }

  checkUncheckAddToCompare(event: any) {
    console.log('event.........', event);
    this.addToCompareAction.emit({
      checked: event.checked,
      product: this.product
    })
  }

  checkForSelect() {
    let checked = false;
    if (this.compareProdcutList.length > 0) {
      const isForCheck = this.compareProdcutList.find((product) => {
        return product.productId === this.product.productId;
      });
      if (isForCheck) {
        checked = true;
      }
    } else {
      checked = false;
    }
    return checked;
  }

}
