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

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  standalone: true,
  imports: [CommonModule, FlexLayoutModule, NgOptimizedImage, MatCardModule, MatIconModule, MatButtonModule],
})
export class ProductCardComponent {
  @Input({ required: true }) product: ProductDetail = null;
  @Output() cardAction: EventEmitter<{productId: string;addAction: boolean}> = new EventEmitter();

  constructor() {}
  ngOnInit(): void {}

  addOrRemoveFromCart(productId: string, addAction: boolean) {
    this.cardAction.emit({
      productId,
      addAction,
    });
  }
}
