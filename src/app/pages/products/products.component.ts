import { Subscription } from 'rxjs';
import { ProductsService } from './../../core/services/products/products.service';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from '../../core/interfaces/iproduct';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SearchPipe } from '../../shared/pipes/search/search.pipe';
import { FormsModule } from '@angular/forms'
import { FilterPipe } from '../../shared/pipes/filter/filter.pipe';

@Component({
  selector: 'app-products',
  imports: [CurrencyPipe, SearchPipe, FilterPipe, RouterLink, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit, OnDestroy {
  allProducts!: IProduct[] | null;
  productSub!: Subscription;
  searchValue:string = '';
  filterValue:string = 'Sort by';

  private _ProductsService = inject(ProductsService);

  ngOnInit(): void {
    this.productSub = this._ProductsService.getProducts().subscribe({
      next: (res) => {
        this.allProducts = res
      }
    })
  }

  ngOnDestroy(): void {
    this.productSub.unsubscribe();
  }
}
