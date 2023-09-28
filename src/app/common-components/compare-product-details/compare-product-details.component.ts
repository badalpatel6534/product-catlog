import { ProductDetail } from 'src/app/utils/product/product_util';
import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-compare-product-details',
  templateUrl: './compare-product-details.component.html',
  styleUrls: ['./compare-product-details.component.scss'],
  standalone: true,
  imports: [CommonModule, NgOptimizedImage]
})
export class CompareProductDetailsComponent {
  @Input({required:true}) productDetail: ProductDetail = null;
}
