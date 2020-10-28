import { Component, OnInit, Input } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() dataSource: any;

  public mouseover = false;
  public carouselTile: NguCarouselConfig;

  constructor() { }

  ngOnInit() {
    this.carouselTile = {
      grid: {xs: 2, sm: 4, md: 6, lg: 6, all: 0},
      slide: 2,
      speed: 400,
      animation: 'lazy',
      load: 2,
      touch: true,
      easing: 'ease',
      point: {
        visible: false,
        hideOnSingleSlide: false
      }
    };
  }

}
