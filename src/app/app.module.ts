import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { SearchComponent } from './components/home/search/search.component';
import { IntroductionComponent } from './components/home/introduction/introduction.component';
import { LoginComponent } from './components/login/login.component';

import { UserService } from './services/user.service';
import { ProductService } from './services/product.service';
import { AuthenticationService } from './services/helper/authenticate.service';
import { BrandService } from './services/brand.service';

import { JwtInterceptor} from './interceptors/jwt.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CarouselComponent,
    SearchComponent,
    IntroductionComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    UserService,
    ProductService,
    BrandService,
    AuthenticationService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
