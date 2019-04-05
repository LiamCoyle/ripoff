import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users : any[] = [];
  products : any[] = [];
  constructor(private userService : UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((data : any)=>{
      this.users = data.data;
      console.log(data);
    });
  }

}
