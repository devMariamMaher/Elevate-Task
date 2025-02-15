import { AfterViewInit, Component, DoCheck, ElementRef, inject, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ProductsService } from '../../core/services/products/products.service';
import { IProduct } from '../../core/interfaces/iproduct';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { SearchPipe } from '../../shared/pipes/search/search.pipe';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [CurrencyPipe, SearchPipe, FormsModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  allProductsData!:IProduct[];
  allProductsDataSub!:Subscription;
  searchValue:string = '';
  isLoading:boolean = false;

  private _ProductsService = inject(ProductsService);

  ngOnInit(): void {
    this.isLoading = true;
    this.allProductsDataSub = this._ProductsService.getProducts().subscribe({
      next: (res)=>{
        this.allProductsData = res;

        setTimeout(()=>{
          this.isLoading = false;
        }, 1000)
      },
      error: (err)=>{
        console.log(err);

        setTimeout(()=>{
          this.isLoading = false
        }, 3000)
      }
    })
  }

  ngOnDestroy(): void {
    this.allProductsDataSub.unsubscribe();
  }
}
