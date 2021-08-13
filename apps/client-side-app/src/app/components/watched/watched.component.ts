import { Component, OnInit } from '@angular/core';

import { RestApiService } from 'apps/client-side-app/src/app/services/rest-api.service';

@Component({
  templateUrl: 'watched.component.html',
  styleUrls: ['./watched.component.css'],
})
export class WatchedComponent implements OnInit {
  Movie: any = [];

  constructor(public restApi: RestApiService) {}

  ngOnInit() {
    this.loadWatched();
  }

  // Get movie list
  loadWatched() {
    return this.restApi.getWatchedMovies().subscribe((data: {}) => {
      this.Movie = data;
    });
  }
}
