import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AuthenticationService } from 'src/app/services/helper/authenticate.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  users : any[] = [];
  user : any;

  constructor(private userService: UserService, private authService: AuthenticationService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(users=>{
      console.log("users", users)
      this.users = users;
    });

    this.authService.currentUserSubject.subscribe(data => {
      this.user = data;
    });
  }

}
