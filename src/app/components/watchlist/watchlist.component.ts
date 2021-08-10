import { Component, OnInit } from '@angular/core';

import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css'],
})

export class WatchlistComponent implements OnInit{
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
