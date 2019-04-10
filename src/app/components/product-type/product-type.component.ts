import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ProductTypeService } from 'src/app/services/product-type.service';
import { BrandService } from 'src/app/services/brand.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { SiteService } from 'src/app/services/site.service';

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.scss']
})
export class ProductTypeComponent implements OnInit {
  _products: any;
  _brands: any;
  _sites: any;
  _categories: any;
  _productTypes: any;

  products : any[] = [];

  constructor(
    private categoryService :CategoryService,
    private productTypeService : ProductTypeService,
    private productService : ProductService,
    private brandService : BrandService,
    private route: ActivatedRoute,
    private siteService : SiteService,
    private router : Router) { }

  ngOnInit() {
    this.init(()=>{
      this.route.paramMap.subscribe(params => {
        this.products = [];
        this._products.filter(x=>x.idProductType == params.get('id')).forEach((product,index) => {

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
      })
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

}
