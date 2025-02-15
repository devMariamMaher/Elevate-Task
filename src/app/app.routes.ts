import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component: HomeComponent, title:'Home'},
  {path: 'product-details/:pId', loadComponent: ()=> import('./pages/product-details/product-details.component').then((c)=> c.ProductDetailsComponent), title:'Product Details'},
  {path:'**', component: NotFoundComponent, title:'Error 404'}
];
