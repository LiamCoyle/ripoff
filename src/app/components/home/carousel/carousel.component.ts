import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ProductService } from 'src/app/services/product.service';

import * as $ from 'jquery';

import 'popper.js';
import 'bootstrap';

//import { CarouselModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md'
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnChanges {

  products: any[]; 

  constructor(private productService : ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((data : any)=>{
      this.products = data;
      console.log(data);
    });
    
   (function($) {
    "use strict";

    // manual carousel controls
   // $('.next').click(function(){ $('.carousel').carousel('next');return false; });
   // $('.prev').click(function(){ $('.carousel').carousel('prev');return false; });
    
})(jQuery);
    
  
    }

  ngOnChanges(){
    console.log(this.products);
  }


}
