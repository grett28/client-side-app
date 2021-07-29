import { Component, OnInit } from '@angular/core';

import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit{
  Movie: any = [];

  constructor(public restApi: RestApiService) { }

  ngOnInit() {
    this.loadUnwatched()
  }

  // Get movie list
  loadUnwatched() {
   return this.restApi.getUnwatchedMovies()
   .subscribe((data: {}) => {  this.Movie = data; })
  }

}
