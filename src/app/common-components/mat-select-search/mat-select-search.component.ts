import { MatSelectModule } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReplaySubject, Subject, takeUntil} from 'rxjs';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-mat-select-search',
  templateUrl: './mat-select-search.component.html',
  styleUrls: ['./mat-select-search.component.scss'],
  standalone: true,
  imports: [
    FlexLayoutModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
    CommonModule,
    NgxMatSelectSearchModule
  ],
})
export class MatSelectSearchComponent {
  // control for the selected bank
  public bankCtrl: FormControl = new FormControl();
  // control for the MatSelect filter keyword
  public bankFilterCtrl: FormControl = new FormControl();

  // list of banks
  @Input({required: true}) allItems: any[] = [];

  @Input({required: true}) searchKey: string = '';

  @Input({required: true}) placeHolderLabel: string = '';

  @Output() onItemSelect: EventEmitter<any> = new EventEmitter();

  // list of banks filtered by search keyword
  public filteredBanks: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  // Subject that emits when the component has been destroyed.
  private _onDestroy = new Subject<void>();

  ngOnInit() {
    // load the initial bank list
    this.filteredBanks.next(this.allItems.slice());
    // listen for search field value changes
    this.bankFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterBanks();
      });
  }

  ngOnChanges(changes: any): void {
    if (changes.allItems && changes.allItems.currentValue !== changes.allItems.previousValue) {
      this.filteredBanks.next(this.allItems.slice());
      this.filterBanks();
    }
  }
  

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  private filterBanks() {
    if (!this.allItems) {
      return;
    }

    // get the search keyword
    let search = this.bankFilterCtrl.value;
    if (!search) {
      this.filteredBanks.next(this.allItems.slice());
      return;
    } else {
      search = search.toLowerCase();
    }


    // filter the banks
    this.filteredBanks.next(
      this.allItems.filter((bank) => bank[this.searchKey].toLowerCase().indexOf(search) > -1)
    );
  }

  onSelectionChange() {
    this.onItemSelect.emit(this.bankCtrl.value);
  }
}
