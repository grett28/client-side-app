import { Component, OnInit } from '@angular/core';

import { RestApiService } from '../../services/rest-api.service';
import { Movie } from '../../_interfaces/movie.model';

@Component({
  selector: 'watchlist-watchlist',
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
   .subscribe((data: Movie) => {  this.Movie = data; })
  }

}
