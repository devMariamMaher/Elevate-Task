import { Component, inject, OnInit } from '@angular/core';
import { IProduct } from '../../core/interfaces/iproduct';
import { ProductsService } from '../../core/services/products/products.service';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CurrencyPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  productID!:string;
  productDetails:IProduct = {} as IProduct;
  isLoading:boolean = false

  private _ActivatedRoute = inject(ActivatedRoute)
  private _ProductsService = inject(ProductsService)

  ngOnInit(): void {
    this.isLoading = true;
    this._ActivatedRoute.paramMap.subscribe({
      next: (param)=>{
        this.productID = param.get('pId')!;
      }
    })

    this._ProductsService.getSpecificProduct(this.productID).subscribe({
      next: (res)=>{
        this.productDetails = res;
        console.log(this.productDetails);

        setTimeout(()=>{
          this.isLoading = false;
        }, 1000)
      },
      error: (err)=>{
        console.log(err);

        setTimeout(()=>{
          this.isLoading = false;
        }, 1000)
      }
    })
  }
}
