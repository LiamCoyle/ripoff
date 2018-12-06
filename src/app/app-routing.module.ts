import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { ProductComponent } from './components/product/product.component';

const appRoutes: Routes = [
  { path:  '', redirectTo:  'user', pathMatch:  'full' },
  {
    path: 'user',
    component: UserComponent,
    data: { title: 'User List' }
  },
  {
    path: 'product',
    component: ProductComponent,
    data: { title: 'Product List' }
  }
  /*{
    path: 'user-details/:id',
    component: UserDetailComponent,
    data: { title: 'Product Details' }
  }*/
];

@NgModule({
  exports:[
    RouterModule,
  ],
  imports: [ RouterModule.forRoot(appRoutes) ],
  
})
export class AppRoutingModule { }

