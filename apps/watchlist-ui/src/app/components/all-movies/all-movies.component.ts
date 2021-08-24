import { Component, OnInit } from '@angular/core';

import { Movie } from '../../_interfaces/movie.model';
import { RestApiService } from '../../services/rest-api.service';

@Component({ 
  templateUrl: 'all-movies.component.html',
  styleUrls: ['./all-movies.component.css'],
 })

export class AllMoviesComponent implements OnInit {
  Movies: any = [];

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit() {
    this.loadMovies()
  }

  // Get movie list
  loadMovies() {
   return this.restApi.getMovies()
   .subscribe((data: Movie) => {  this.Movies = data; })
  }
}
