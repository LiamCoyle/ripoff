import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng5SliderModule } from 'ng5-slider';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { SearchComponent } from './components/home/search/search.component';
import { IntroductionComponent } from './components/home/introduction/introduction.component';
import { LoginComponent } from './components/login/login.component';
import { CardComponent } from './components/card/card.component';

import { UserService } from './services/user.service';
import { ProductService } from './services/product.service';
import { AuthenticationService } from './services/helper/authenticate.service';
import { BrandService } from './services/brand.service';
import { SiteService } from './services/site.service';
import { ProductTypeService } from './services/product-type.service';
import { CategoryService } from './services/category.service';
import { AlerteService } from './services/alerte.service';

import { JwtInterceptor} from './interceptors/jwt.interceptor';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignupComponent } from './components/signup/signup.component';
import { AlerteComponent } from './components/dashboard/alerte/alerte.component';
import { AccountComponent } from './components/account/account.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CarouselComponent,
    SearchComponent,
    IntroductionComponent,
    LoginComponent,
    CardComponent,
    DashboardComponent,
    SignupComponent,
    AlerteComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    Ng5SliderModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule

  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    UserService,
    ProductService,
    BrandService,
    SiteService,
    ProductTypeService,
    CategoryService,
    AuthenticationService,
    AlerteService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
