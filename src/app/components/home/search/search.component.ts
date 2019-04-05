import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  private _products : any[] = [];
  private _brands : any[] = [];
  brands : any[] = [];
  brandFilter : any[] = [];
  searchString : string = "";

  products : any[] = [];

  constructor(private productService : ProductService, private brandService : BrandService) { }

  ngOnInit() {
    
    this.init(()=>{
      this._products.forEach(product => {
        if(this.brands.find(x=>{return x.id == product.idBrand})){
          return;
        }
        this.brands.push(this._brands.find(x=> {return x.id == product.idBrand}));
      });
      this.products = this._products;
    });
  }

  search(searchInput : string){
    this.searchString = searchInput;
    this.applyFilters();
  }

  init(callback){
    this.productService.getProducts().subscribe(data => {
      this._products = data;
      this.brandService.getBrands().subscribe(data => {
        this._brands = data;
        callback();
      });
    });
  }


  toggleBrand(selectedBrand : any){
    if(this.brandFilter.includes(selectedBrand)){
      this.brandFilter.filter(function(element){
        return element != selectedBrand;
      });
    }else{
      this.brandFilter.push(selectedBrand);
    }
    this.applyFilters();
  }

  applySearchFilter(){
    if(this.searchString){
      let reg = new RegExp(this.searchString, 'g');
      let productsTmp = [];
      this._products.forEach(product => {
        let brandTmp = this._brands.find(x=> {return x.id == product.idBrand})
        let productTmp = product.name + brandTmp.name
        if(productTmp.match(reg)){
          productsTmp.push(product);
        }
      });
      this.products=productsTmp;
    }
  }

  applyBrandFilter(){
    if(this.brandFilter.length > 0){
      let productTmp : any[] = [];
      this.products.forEach(product => {
        if(this.brandFilter.find(x=>{return x.id == product.idBrand})){
          productTmp.push(product);
        }
      });
      this.products = productTmp;
    }
  }

  applyFilters(){
    this.products = this._products;
    this.applyBrandFilter();
    console.log("products after brand filter ",this.products);
    this.applySearchFilter();
    console.log("products after search filter ",this.products);
    console.log("products after filters ",this.products);

  }
}
