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
    
    $('.carousel.carousel-multi-item.v-2 .carousel-item').each(function(){
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
    
      for (var i=0;i<3;i++) {
        next=next.next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
      }
    }); 
    
  
    }

  ngOnChanges(){
    console.log(this.products);
  }


}
