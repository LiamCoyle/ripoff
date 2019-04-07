import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AuthenticationService } from 'src/app/services/helper/authenticate.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user : any;

  constructor(private userService: UserService, private authService: AuthenticationService) { }

  ngOnInit() {
    this.authService.currentUserSubject.subscribe(data => {
      this.authService.getUserFromToken(data, user=>{
        this.user= user;
      });
    });
  }
}
