import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/helper/authenticate.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  user : any = [];
  userForm = this.fb.group({
    name: ['', Validators.required],
    mail: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private fb : FormBuilder,
    private authService : AuthenticationService,
    private userService : UserService
    
    ) {
    
  }

  ngOnInit() {
    this.authService.currentUserSubject.subscribe(data => {
      this.authService.getUserFromToken(data, user=>{
        this.user= user;
        this.userForm.get('name').setValue(user.name);
        this.userForm.get('password').setValue(user.password);
        this.userForm.get('mail').setValue(user.mail);
      });
    });
  }
  onSubmit(){
    let userObj ={
      name : this.userForm.get('name').value,
      password : this.userForm.get('password').value,
      mail : this.userForm.get('mail').value
    };
    console.log("user obj", userObj);
    this.userService.updateUser(this.user.id, userObj).subscribe(data=>{
      console.log("update user", data);
    });

  }

}
