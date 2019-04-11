import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { BrandService } from 'src/app/services/brand.service';
import { SiteService } from 'src/app/services/site.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductTypeService } from 'src/app/services/product-type.service';

import { Options, ChangeContext} from 'ng5-slider';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  private _products : any[] = [];
  private _brands : any[] = [];
  private _sites : any[] = [];
  private _categories : any[] = [];
  private _productTypes : any[] = [];

  brands : any[] = [];
  sites : any[] = [];
  categories : any[] = [];
  productTypes : any[] = [];

  brandFilter : any[] = [];
  siteFilter : any[] = [];
  categoryFilter : any[] = [];

  searchString : string = "";
  showFilters : boolean = false;

  options: Options = new Options;

  products : any[] = [];

  constructor(private productService : ProductService, private brandService : BrandService, private siteService : SiteService, private productTypeService : ProductTypeService, private categoryService : CategoryService) { }

  ngOnInit() {
    
    this.init(()=>{
      console.log("_sites",this._sites);
      console.log("_brands",this._brands);
      //this.maxPrice = Math.max.apply(Math, this._products.map(function(o) { return o.price; }));
      //this.minPrice = Math.min.apply(Math, this._products.map(function(o) { return o.price; }));

      this.options.ceil = Math.max.apply(Math, this._products.map(function(o) { return o.price; }));
      this.options.floor = Math.min.apply(Math, this._products.map(function(o) { return o.price; }));

      this._products.forEach((product,index) => {

        let productTypeObj = this._productTypes.find(x=> {return x.id == product.idProductType});
        let siteObj = this._sites.find(x=> {return x.id == product.idSite});
        let brandObj = this._brands.find(x=> {return x.id == productTypeObj.idBrand});
        let categoryObj = this._categories.find(x=> {return x.id == productTypeObj.idCategory});
        
        this._products[index].name = productTypeObj.name;
        this._products[index].img = productTypeObj.img;
        this._products[index].idBrand = brandObj.id;
        this._products[index].nameBrand = brandObj.name;
        this._products[index].nameSite = siteObj.name;
        this._products[index].idCategory = categoryObj.id;
        this._products[index].nameCategory = categoryObj.name;

        if(!this.brands.find(x=>{return x.id == productTypeObj.idBrand})){
          this.brands.push(brandObj);
        }
        if(!this.sites.find(x=>{return x.id == product.idSite})){
          this.sites.push(siteObj);
        }
        if(!this.categories.find(x=>{return x.id == productTypeObj.idCategory})){
          this.categories.push(categoryObj);
        }
        
      });
      this.products = this._products;
      console.log("products",this.products);
      console.log("sites",this.sites);
      console.log("brands",this.brands);
      console.log("categories",this.categories);

    });

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

  search(searchInput : string){
    this.searchString = searchInput;
    this.applyFilters();
  }

  checkCategoryFilter(category){
    if(this.categoryFilter.find(x=>{return x.id == category.id})){
      return true;
    }
    return false;
  }

  toggleShowFilters(){
    this.showFilters = !this.showFilters;
  }

  toggleBrand(selectedBrand : any){
    if(this.brandFilter.includes(selectedBrand)){
      this.brandFilter = this.brandFilter.filter(function(element){
        return element != selectedBrand;
      });
    }else{
      this.brandFilter.push(selectedBrand);
    }
    this.applyFilters();
  }

  toggleSite(selectedSite : any){
    if(this.siteFilter.includes(selectedSite)){
      this.siteFilter= this.siteFilter.filter(function(element){
        return element != selectedSite;
      });
    }else{
      this.siteFilter.push(selectedSite);
    }
    this.applyFilters();
  }

  toggleCategory(selectedCategory : any){
    if(this.categoryFilter.includes(selectedCategory)){
      this.categoryFilter= this.categoryFilter.filter(function(element){
        return element != selectedCategory;
      });
    }else{
      this.categoryFilter.push(selectedCategory);
    }
    this.applyFilters();
  }

  applyCategoryFilter(){
    if(this.categoryFilter.length > 0){
      let productTmp : any[] = [];
      this.products.forEach(product => {
        if(this.categoryFilter.find(x=>{return x.id == product.idCategory})){
          productTmp.push(product);
        }
      });
      this.products = productTmp;
    }
  }

  applyPriceRangeFilter(changeContext: ChangeContext){
    let productsTmp : any[] = [];
    this.products.forEach(product => {
      if(product.price<= changeContext.highValue && product.price >= changeContext.value){
        productsTmp.push(product);
      }
    });
    this.products = productsTmp;
    
  }

  resetFilters(){
    this.brandFilter = [];
    this.siteFilter = [];
    this.categoryFilter = [];
    
    this.applyFilters();
  }

  applySearchFilter(){
    if(this.searchString){
      let reg = new RegExp(this.searchString, 'i');
      let productsTmp = [];
      this._products.forEach(product => {
        let productString = product.name + product.nameBrand + product.nameSite;
        if(productString.match(reg)){
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

  applySiteFilter(){
    if(this.siteFilter.length > 0){
      let productTmp : any[] = [];
      this.products.forEach(product => {
        if(this.siteFilter.find(x=>{return x.id == product.idSite})){
          productTmp.push(product);
        }
      });
      this.products = productTmp;
    }
  }

  applyFilters(changeContext?: ChangeContext){
    this.products = this._products;
    if(changeContext){
      this.applyPriceRangeFilter(changeContext);
    }
    this.applyBrandFilter();
    this.applySearchFilter();
    this.applySiteFilter();
    this.applyCategoryFilter();

  }
}
