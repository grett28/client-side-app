import { Component, OnInit } from '@angular/core';
import { RestApiService } from './services/rest-api.service';
import { Movie } from './_interfaces/movie.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
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
