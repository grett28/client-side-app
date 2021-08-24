import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

import { RestApiService } from '../../services/rest-api.service';
import { Movie } from '../../_interfaces/movie.model';

@Component({
  selector: 'watchlist-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {

  Movies: any = [];

  constructor( public restApi: RestApiService ) {}

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    nav: true
  }

  ngOnInit() {
    this.loadPopular()
  }

  loadPopular(){
    return this.restApi.getPopular()
    .subscribe((data: Movie) => {  this.Movies = data; })
  }
}
