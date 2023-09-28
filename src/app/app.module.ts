import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './common-components/product-card/product-card.component';
import { ProductTableComponent } from './common-components/product-table/product-table.component';
import { CompareProductComponent } from './components/compare-product/compare-product.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { MatSelectSearchComponent } from './common-components/mat-select-search/mat-select-search.component';
import { CompareProductDetailsComponent } from './common-components/compare-product-details/compare-product-details.component';
import { ProductFilterPipe } from './pipes/product-filter.pipe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ProductCardComponent,
    ProductTableComponent,
    HeaderComponent,
    ProductListComponent,
    CompareProductComponent,
    MatSelectSearchComponent,
    CompareProductDetailsComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
