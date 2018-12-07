import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  products : any[] = [];

  constructor(private productService : ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data.data;
    });

  }

}
