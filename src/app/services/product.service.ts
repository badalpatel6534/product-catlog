import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductDetail } from '../utils/product/product_util';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //Note: taking prodcutList behaviour subject because when route change that time show the selected item
  public productListSubject: BehaviorSubject<ProductDetail[]> = new BehaviorSubject<ProductDetail[]>([]);
  productList$: Observable<ProductDetail[]> = this.productListSubject.asObservable();

  public cartSavedItemSetSubject: BehaviorSubject< { [productId: string]: number } > = new BehaviorSubject< { [productId: string]: number } >({});
  cartSavedItemSet$: Observable< { [productId: string]: number } > = this.cartSavedItemSetSubject.asObservable();

  public toggleHeaderGridTableSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  headerGridTableSelection$: Observable<boolean> = this.toggleHeaderGridTableSubject.asObservable();

  public cartObjWithTotalAmountSubject: BehaviorSubject<{ count: number, totalAmount: number  }> = new BehaviorSubject<{ count: number, totalAmount: number  }>({count: 0, totalAmount: 0});
  cartObjWithTotal$: Observable<{ count: number, totalAmount: number  }> = this.cartObjWithTotalAmountSubject.asObservable();


  constructor() { }
  
  setToggleHeaderGridTable(isToggle: boolean) {
    this.toggleHeaderGridTableSubject.next(isToggle);
  }

  setCartObjWithTotalAmount(cartObj: {count: number, totalAmount: number}) {
    this.cartObjWithTotalAmountSubject.next(cartObj);
  }

  setproductListSubject(productList: ProductDetail[]) {
    this.productListSubject.next(productList);
  }

  setCartSavedItemSet(cartSet: { [productId: string]: number }) {
    this.cartSavedItemSetSubject.next(cartSet);
  }
}
