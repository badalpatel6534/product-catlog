import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { ProductCardComponent } from 'src/app/common-components/product-card/product-card.component';
import { ProductTableComponent } from 'src/app/common-components/product-table/product-table.component';
import { ProductService } from 'src/app/services/product.service';
import {
  InventoryData,
  ProductInventory,
} from 'src/app/utils/inventory/inventory_util';
import { ProductData, ProductDetail } from 'src/app/utils/product/product_util';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  standalone: true,
  imports: [CommonModule, FlexLayoutModule, ProductCardComponent, ProductTableComponent]
})
export class ProductListComponent {
  products = [] as ProductDetail[];
  isGridView$: Observable<boolean>;
  cart$: Observable<{ [productId: string]: number }>;
  productList$: Observable<ProductDetail[]>;

  constructor(private productService: ProductService) {
    this.isGridView$ = this.productService.headerGridTableSelection$;
    this.productList$ = this.productService.productList$;
    this.cart$ = this.productService.cartSavedItemSet$;

    const savedProductList = JSON.parse(localStorage.getItem('productList'));
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    const savedCartWithTotalAmount = JSON.parse(localStorage.getItem('cartWithTotalAmount'));
    const savedGridTableView = JSON.parse(localStorage.getItem('defaultGridView'));

    if (savedProductList && savedProductList.length > 0) {
        this.productService.setproductListSubject(savedProductList);
    } else if (this.productService.productListSubject.getValue().length <= 0) {
      // very first time
        this.setTheProduct();
    }

    if (savedCartItems) {
        this.productService.setCartSavedItemSet(savedCartItems);
    }

    if (savedCartWithTotalAmount) {
        this.productService.setCartObjWithTotalAmount(savedCartWithTotalAmount);
    }
    if (savedGridTableView !== null) {
      this.productService.setToggleHeaderGridTable(savedGridTableView);
    } else {
      localStorage.setItem('defaultGridView', JSON.stringify(true));
      this.productService.setToggleHeaderGridTable(true);
    }

    if (this.productService.productListSubject.getValue().length <= 0) {
      this.setTheProduct();
    }

  }

  ngOnInit(): void {}

  setTheProduct = () => {
    const productList = [...ProductData]; // immutable ProductData;
    const invetoryList = [...InventoryData];

    const products = productList.map((product: ProductDetail) => {
      const findInvetory = invetoryList.find((invetory: ProductInventory) => {
        return product.productId === invetory.productId;
      });
      if (findInvetory) {
        product.availableStock = findInvetory.availableStock;
        product.inCart = 0;
      }
      return product;
    });
    this.productService.setproductListSubject(products);
  };

  cardAction(event: any) {
    console.log('event', event);
    if (event.addAction) {
      this.addToCart(event.productId);
    } else {
      this.removeFromCart(event.productId);
    }
  }

  addToCart(productId: string) {
    if (productId) {
      const productList = this.productService.productListSubject.getValue();
      const cartItems = this.productService.cartSavedItemSetSubject.getValue();
      let product = productList.find((p) => p.productId === productId);
      if (product && product.inCart < product.availableStock) {
        product.inCart++;
        if (cartItems[productId]) {
          cartItems[productId]++;
        } else {
          cartItems[productId] = 1;
        }
      }
      // console.log('productList........', productList);
      this.productService.setproductListSubject([...productList]);
      this.productService.setCartSavedItemSet({...cartItems})
      this.updateCartCount(productList, cartItems);
    }
  }

  removeFromCart(productId: string): void {
    const productList = this.productService.productListSubject.getValue();
    const cartItems = this.productService.cartSavedItemSetSubject.getValue();
    let product = productList.find((p) => p.productId === productId);

    if (product && product.inCart > 0) {
      product.inCart--;
      cartItems[productId]--;
      if (cartItems[productId] === 0) {
          delete cartItems[productId];
      }
  }

    this.productService.setCartSavedItemSet({...cartItems})
    this.productService.setproductListSubject([...productList]);
    this.updateCartCount(productList, cartItems);
  }

  updateCartCount(productList: ProductDetail[], cartItems: { [productId: string]: number }) {
    const cartValuesArr = Object.values(cartItems);
    const itemsInCart = productList.filter(product => cartItems[product.productId]);
    let totalCount = 0;
    let totalAmount = 0;
    if (cartValuesArr.length > 0) {
      totalCount = Object.values(cartValuesArr).reduce((acc, curr) => {
        return acc + curr;
      });
      totalAmount = itemsInCart.reduce((acc, product) => acc + (product.price * cartItems[product.productId]), 0);

      this.productService.setCartObjWithTotalAmount({
        count: totalCount,
        totalAmount: totalAmount
      });
    } else {
      this.productService.setCartObjWithTotalAmount({
        count: 0,
        totalAmount: 0
      });
    }

    localStorage.setItem('productList', JSON.stringify(productList));
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('cartWithTotalAmount', JSON.stringify({
      count: totalCount,
      totalAmount: totalAmount
    }));
  }
}
