import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router, private userService : UserService) { }

  ngOnInit() {
  }

  signup(mail: string, password: string, name: string){
    let userObj = {mail: mail , password : password, name : name};
    this.userService.createUser(userObj).subscribe(data => {
      console.log("create user subscribe",data);
      if(data){
        this.router.navigate(['/login']);
      }
    });
  }

}
