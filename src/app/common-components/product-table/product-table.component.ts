import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductDetail } from 'src/app/utils/product/product_util';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss'],
  standalone: true,
  imports: [CommonModule,NgOptimizedImage, MatButtonModule, MatIconModule]
})
export class ProductTableComponent {
  @Input({ required: true }) products: ProductDetail[] = [];
  @Output() cardAction: EventEmitter<{
    productId: string,
    addAction: boolean
  }> = new EventEmitter();
  constructor() {}

  addOrRemoveFromCart(productId: string, addAction: boolean) {
    this.cardAction.emit({
      productId,
      addAction
    })
  }
}
