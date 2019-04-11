import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { BrandService } from 'src/app/services/brand.service';
import { SiteService } from 'src/app/services/site.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductTypeService } from 'src/app/services/product-type.service';

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

  products: any[] = [];
  displayedProducts: any[] = []; 

  private _products : any[] = [];
  private _brands : any[] = [];
  private _sites : any[] = [];
  private _categories : any[] = [];
  private _productTypes : any[] = [];

  constructor(
    private productService : ProductService,
    private brandService : BrandService,
    private productTypeService : ProductTypeService,
    private siteService : SiteService,
    private categoryService : CategoryService
    
    ) { }

  ngOnInit() {

    this.init(()=>{

      this._products.forEach((product,index) => {

        let productTypeObj = this._productTypes.find(x=> {return x.id == product.idProductType});
        let siteObj = this._sites.find(x=> {return x.id == product.idSite});
        let brandObj = this._brands.find(x=> {return x.id == productTypeObj.idBrand});
        let categoryObj = this._categories.find(x=> {return x.id == productTypeObj.idCategory});
        
        product.name = productTypeObj.name;
        product.idBrand = brandObj.id;
        product.nameBrand = brandObj.name;
        product.nameSite = siteObj.name;
        product.idCategory = categoryObj.id;
        product.nameCategory = categoryObj.name;

        this.products.push(product);
      });
      for (let i = 0; i < 3; i++) {
        
        while (this.displayedProducts.length < 3) {
          let item = this.products[Math.floor(Math.random()*this.products.length)];
          if(!this.displayedProducts.includes(item)){
            this.displayedProducts.push(item);
          }

        }
        
      }
      
    });
    
   /*(function($) {
    "use strict";

    // manual carousel controls
   // $('.next').click(function(){ $('.carousel').carousel('next');return false; });
   // $('.prev').click(function(){ $('.carousel').carousel('prev');return false; });
    
})(jQuery);*/
    
  
  }


  init(callback){
    this.productService.getProducts().subscribe(data => {
      this._products = data;
      this.brandService.getBrands().subscribe(data => {
        this._brands = data;
        this.siteService.getSites().subscribe(data => {
          this._sites = data;
          this.categoryService.getCategories().subscribe(data=> {
            this._categories = data;
            this.productTypeService.getProductTypes().subscribe(data=> {
              this._productTypes = data;
              callback();
            });
          });
        });
      });
    });
  }

  ngOnChanges(){
    console.log(this.products);
  }


}
