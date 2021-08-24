import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

import { RestApiService } from "../../services/rest-api.service";
import { Movie } from "../../_interfaces/movie.model";

@Component({
    selector: 'watchlist-add-movie',
    templateUrl: './add-movie.component.html',
    styleUrls: ['./add-movie.component.css']
})

export class AddMovieComponent implements OnInit{
   movie_title: any;
   Movies: any = [];

   constructor(private activeRoute: ActivatedRoute, public restApi: RestApiService) {}
    
   ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      this.movie_title = params.get('title');
    });
    
    this.activeRoute.params.subscribe(params => {
		this.loadSearchResults(this.movie_title);
        });

        console.log("add-movie");
        console.log(this.movie_title);
    }

    loadSearchResults(title: string){
    return this.restApi.getSearchMovie(title)
    .subscribe((data: Movie) => {  this.Movies = data; }); 
    }
}