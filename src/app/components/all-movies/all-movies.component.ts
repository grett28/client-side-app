import { Component, OnInit } from '@angular/core';

import { RestApiService } from 'src/app/services/rest-api.service';
import 'src/styles.css'

@Component({ 
  templateUrl: 'all-movies.component.html',
  styleUrls: ['./all-movies.component.css'],
 })

export class AllMoviesComponent implements OnInit {
  Movie: any = [];

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit() {
    this.loadMovies()
  }

  // Get movie list
  loadMovies() {
   return this.restApi.getMovies()
   .subscribe((data: {}) => {  this.Movie = data; })
  }
}
