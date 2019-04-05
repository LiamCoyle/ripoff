import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/helper/authenticate.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService : AuthenticationService, private router : Router) { }

  ngOnInit() {
  }

  public login(mail, password){
    console.log(mail, password);
    console.log(this.authService.login(mail, password));
    if(this.authService.login(mail, password)){
      this.router.navigate(['/home']);
    }
  }

}
