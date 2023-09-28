import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareProductDetailsComponent } from './compare-product-details.component';

describe('CompareProductDetailsComponent', () => {
  let component: CompareProductDetailsComponent;
  let fixture: ComponentFixture<CompareProductDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompareProductDetailsComponent]
    });
    fixture = TestBed.createComponent(CompareProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
