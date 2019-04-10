import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CategoryService } from 'src/app/services/category.service';
import { ProductTypeService } from 'src/app/services/product-type.service';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  _category :any;
  _productTypes : any[] = [];
  _brands : any[] = [];

  productTypes : any[] = [];

  constructor(
    private categoryService :CategoryService,
    private productTypeService : ProductTypeService,
    private brandService : BrandService,
    private route: ActivatedRoute,
    private router : Router
    ) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.productTypes = [];
      this.productTypeService.getProductTypes().subscribe(productTypes => {
        
        this._productTypes = productTypes.filter(x => x.idCategory == params.get('id'));
       
        this.brandService.getBrands().subscribe(brands=>{
          
          this._brands = brands;
          this._productTypes.forEach(productType => {
            productType.nameBrand = this._brands.find(x => x.id == productType.idBrand).name;
            this.productTypes.push(productType);
          })
         
        })
      });
      
    });
    
  }

}
