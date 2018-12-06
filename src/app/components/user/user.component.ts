import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:User[];

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  getUsers()  {
    this.userService.getUsers().subscribe((data:any) => {
      this.users = data.data;
      console.log(data);
    }
    );
  }

  ngOnInit() {
    this.getUsers();
  }

}
