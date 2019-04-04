import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users : any[] = [];
  hlProducts : any[] = [];
  constructor(private userService : UserService, private productService : ProductService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((data : any)=>{
      this.users = data.data;
      console.log(data);
    });

    this.productService.getHLProducts().subscribe((data : any)=>{
      this.hlProducts = data;
      console.log(data);
    });

  }

}
