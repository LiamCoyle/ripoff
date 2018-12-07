import { Component, OnInit } from '@angular/core';
//import { CarouselModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md'
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  public myInterval: number = 3000;
  public activeSlideIndex: number = 0;
  public noWrapSlides:boolean = false;

  constructor() { }

  ngOnInit() {
  }



  activeSlideChange(event: any){
      console.log(event);
  }

  public slides:Array<Object> = [
      {"image":"https://mdbootstrap.com/img/Photos/Slides/img%20(18).jpg"},
      {"image":"https://mdbootstrap.com/img/Photos/Slides/img%20(19).jpg"},
      {"image":"https://mdbootstrap.com/img/Photos/Slides/img%20(20).jpg"},
  ];

}
