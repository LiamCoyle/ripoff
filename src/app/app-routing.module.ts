import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { SignupComponent } from './components/signup/signup.component';
import { AccountComponent } from './components/account/account.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductTypeComponent } from './components/product-type/product-type.component';

const routes: Routes = [

  { path: '',   component: HomeComponent },
  { path: 'login',   component: LoginComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'category/:id', component: CategoryComponent},
  { path: 'productType/:id', component: ProductTypeComponent},
  { path: 'dashboard',
    component: DashboardComponent,
    canActivate : [AuthGuard]
  },
  { path: 'account',
    component: AccountComponent,
    canActivate : [AuthGuard]
  }

];



 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
