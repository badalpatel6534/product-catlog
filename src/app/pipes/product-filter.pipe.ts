import { Pipe, PipeTransform } from '@angular/core';
import { ProductDetail } from '../utils/product/product_util';

@Pipe({
  name: 'productFilter',
  standalone: true,
  pure: false
})
export class ProductFilterPipe implements PipeTransform {

  transform(products: Array<ProductDetail>,selectedProductIds: Array<string>, dropdownIndex: number): Array<ProductDetail> {
    return products.filter(product => {
      const isSelectedInCurrentDropdown = selectedProductIds[dropdownIndex] === product.productId;
      const isSelectedInAnyDropdown = selectedProductIds.includes(product.productId);
      return isSelectedInCurrentDropdown || !isSelectedInAnyDropdown;
    });
  }


}
