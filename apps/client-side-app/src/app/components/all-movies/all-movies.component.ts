import { Component, OnInit } from '@angular/core';

import { RestApiService } from 'apps/client-side-app/src/app/services/rest-api.service';
import 'apps/client-side-app/src/styles.css';

@Component({
  templateUrl: 'all-movies.component.html',
  styleUrls: ['./all-movies.component.css'],
})
export class AllMoviesComponent implements OnInit {
  Movie: any = [];

  constructor(public restApi: RestApiService) {}

  ngOnInit() {
    this.loadMovies();
  }

  // Get movie list
  loadMovies() {
    return this.restApi.getMovies().subscribe((data: {}) => {
      this.Movie = data;
    });
  }
}
