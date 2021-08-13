import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RestApiService } from 'apps/client-side-app/src/app/services/rest-api.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'],
})
export class AddMovieComponent implements OnInit {
  movie_title: any;
  Movie: any = [];

  constructor(
    private activeRoute: ActivatedRoute,
    public restApi: RestApiService
  ) {}

  ngOnInit() {
    this.activeRoute.paramMap.subscribe((params) => {
      this.movie_title = params.get('title');
    });

    this.activeRoute.params.subscribe((params) => {
      this.loadSearchResults(this.movie_title);
    });

    console.log('add-movie');
    console.log(this.movie_title);
  }

  loadSearchResults(title: string) {
    return this.restApi.getSearchMovie(title).subscribe((data: {}) => {
      this.Movie = data;
    });
  }
}
