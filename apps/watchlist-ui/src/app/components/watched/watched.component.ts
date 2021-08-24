import { Component, OnInit } from '@angular/core';

import { RestApiService } from '../../services/rest-api.service';
import { Movie } from '../../_interfaces/movie.model';

@Component({ 
  templateUrl: 'watched.component.html',
  styleUrls: ['./watched.component.css'],
 })

export class WatchedComponent implements OnInit {
  movies: any = [];

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit() {
    this.loadWatched()
  }

  // Get movie list
  loadWatched() {
   return this.restApi.getWatchedMovies()
   .subscribe((data: Movie) => {  this.movies = data; })
  }
}
