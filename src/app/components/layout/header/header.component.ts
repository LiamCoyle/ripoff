import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/helper/authenticate.service';
import { Router } from "@angular/router";
import * as $ from 'jquery';
import { CategoryService } from 'src/app/services/category.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentUser  : any ;
  categories : any[] =[];
  
  constructor(
    private authService : AuthenticationService,
    private categoryService : CategoryService,
    private router : Router) { }

  ngOnInit() {
    this.authService.currentUserSubject.subscribe(user => {
      console.log("header component subscribe", user);  
      this.currentUser = user;
    });

    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['']);
  }



}
