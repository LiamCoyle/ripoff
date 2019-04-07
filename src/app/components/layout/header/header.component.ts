import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/helper/authenticate.service';
import { Router } from "@angular/router";
import * as $ from 'jquery';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentUser  : any ;
  constructor(private authService : AuthenticationService, private router : Router) { }

  ngOnInit() {
    this.authService.currentUserSubject.subscribe(user => {
      console.log("header component subscribe", user);  
      this.currentUser = user;
    });
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['']);
  }

}
