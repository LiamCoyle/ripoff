import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path:  '', redirectTo:  'users', pathMatch:  'full' },
  {
    path: 'users',
    component: UserComponent,
    data: { title: 'User List' }
  }
  /*{
    path: 'user-details/:id',
    component: UserDetailComponent,
    data: { title: 'Product Details' }
  }*/
];


@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
