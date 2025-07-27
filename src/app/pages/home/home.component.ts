import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products/products.service';
import { IProduct } from '../../core/interfaces/iproduct';
import { CurrencyPipe } from '@angular/common';
import { SearchPipe } from '../../shared/pipes/search/search.pipe';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [CurrencyPipe, SearchPipe, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  productsData!:IProduct[] | null;
  productsDataSub!:Subscription;
  searchValue:string = '';

  private _ProductsService = inject(ProductsService);

  ngOnInit(): void {
    this.productsDataSub = this._ProductsService.getProducts().subscribe({
      next: (res)=>{
        this.productsData = res;
      },
    })
  }

  ngOnDestroy(): void {
    this.productsDataSub.unsubscribe();
  }
}
