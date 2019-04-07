import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from 'src/app/services/helper/authenticate.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentUser  : any = {};
  constructor(private authService : AuthenticationService) { }

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    $(document).ready(function() {
      //$(".dropdown-toggle").dropdown();
  });
  }

}
