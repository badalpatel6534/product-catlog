import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProductDetail } from 'src/app/utils/product/product_util';

@Component({
  selector: 'app-compare-product-details',
  templateUrl: './compare-product-details.component.html',
  styleUrls: ['./compare-product-details.component.scss'],
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, MatIconModule, MatButtonModule]
})
export class CompareProductDetailsComponent {
  @Input({required:true}) productDetail: ProductDetail = null;
}
