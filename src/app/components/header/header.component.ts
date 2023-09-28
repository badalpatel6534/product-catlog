import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatSlideToggleModule,
    CommonModule,
    MatBadgeModule,
    FlexLayoutModule,
    MatButtonModule,
  ],
})
export class HeaderComponent {
  isToggleEnable$: Observable<boolean>;
  routerSubscription: Subscription;
  cartObjWithTotal$: Observable<{ count: number; totalAmount: number }>;
  currnetURL = '' as string;

  constructor(private productService: ProductService, private router: Router) {
    this.isToggleEnable$ = this.productService.headerGridTableSelection$;
    this.cartObjWithTotal$ = this.productService.cartObjWithTotal$;
    this.routerSubscription = this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        this.currnetURL = event.url;
      }
    });
  }

  gridTableChangeToggle() {
    const currnetValue = this.productService.toggleHeaderGridTableSubject.getValue();
    const isToggle = !currnetValue;
    localStorage.setItem('defaultGridView', JSON.stringify(isToggle));
    this.productService.setToggleHeaderGridTable(isToggle);
  }

  redirectToCompareProduct() {
    this.router.navigateByUrl('/compare-product');
  }

  redirectToProduct() {
    this.router.navigateByUrl('/product');
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}
