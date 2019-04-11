import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/helper/authenticate.service';
import { AlerteService } from '../../../services/alerte.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductTypeService } from 'src/app/services/product-type.service';
import { componentFactoryName } from '@angular/compiler';

@Component({
  selector: 'app-alerte',
  templateUrl: './alerte.component.html',
  styleUrls: ['./alerte.component.scss']
})
export class AlerteComponent implements OnInit {

  user: any;
  alertes: any[];
  categories: any[];
  productTypes : any[];
  displayedProductTypes : any [];
  selectedCategory : any;
  selectedProductType : any;

  constructor(
    private authService  : AuthenticationService, 
    private alerteService : AlerteService,
    private categoryService : CategoryService,
    private productTypeService : ProductTypeService
    ) { }

  ngOnInit() {
    this.authService.currentUserSubject.subscribe(data => {
      this.authService.getUserFromToken(data, user=>{
        this.user= user;
        this.alerteService.getAlertesForUser(user).subscribe(alertes =>{
          this.productTypeService.getProductTypes().subscribe(productTypes => {
            console.log("user alertes",alertes);
            this.productTypes = productTypes;
            alertes.forEach((alerte,index)=> {
              alertes[index].productTypeName = this.productTypes.find(x=>{return x.id == alerte.idProductType}).name;
              alertes[index].productTypeImg = this.productTypes.find(x=>{return x.id == alerte.idProductType}).img;
              this.alertes = alertes;
            });
          })
        })
      });
    });

    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
    })

    this.productTypeService.getProductTypes().subscribe(productTypes => {
      console.log("alerte component productTypes", productTypes);
      this.productTypes = productTypes;
    })
  }

  createAlerte(name:string, maxPrice: number){
    let alerteObj = {
      name: name,
      idUser: this.user.id,
      idProductType: this.selectedProductType.id,
      maxPrice : maxPrice
    };
    console.log("create alerte", alerteObj);
    this.alerteService.createAlerte(alerteObj).subscribe(data => {
      console.log("response create alerte", data);
      this.alerteService.getAlertesForUser(this.user).subscribe(alertes =>{
        console.log("user alertes",alertes);
        this.alertes = alertes;
      })
    });

  }

  deleteAlerte(alerte){
    console.log("delete alerte", alerte);
    this.alerteService.deleteAlerte(alerte).subscribe(data => {
      console.log("response delete alerte", data);
      this.alerteService.getAlertesForUser(this.user).subscribe(alertes =>{
        console.log("user alertes",alertes);
        this.alertes = alertes;
      })
    });
  }

  updateAlerte(alerte){
    console.log("delete alerte", alerte);
    this.alerteService.deleteAlerte(alerte).subscribe(data => {
      console.log("response delete alerte", data);
      this.alerteService.getAlertesForUser(this.user).subscribe(alertes =>{
        console.log("user alertes",alertes);
        this.alertes = alertes;
      })
    });
  }

  selectCategory(selectedCategory : any){
    this.selectedCategory = selectedCategory;
    this.displayedProductTypes = this.productTypes.filter(productType =>{
      return productType.idCategory == selectedCategory.id;
    });
  }

  selectProductType(selectedProductType : any){
    this.selectedProductType = selectedProductType;
  }

}
