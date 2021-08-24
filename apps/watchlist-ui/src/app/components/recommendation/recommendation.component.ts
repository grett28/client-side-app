import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { RestApiService } from "../../services/rest-api.service";
import { Movie } from "../../_interfaces/movie.model";

@Component ({ selector: 'watchlist-recommendation',
templateUrl: './recommendation.component.html',
styleUrls: ['./recommendation.component.css']
})

export class RecommendationComponent implements OnInit, OnDestroy{
  @Input() altId: string;
  @Input() recName: string;
  @Input() recPoster: string;
  @Input() recOverview: string;
  subscription: Subscription = new Subscription();
  Movie: any = [];

  constructor(public restApi: RestApiService) { }

  ngOnInit(){
    this.subscription.add(this.restApi.getRecommendedMovie(this.altId)
    .subscribe((data: Movie) => {  this.Movie = data; }))
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  //get movie recommendation
  loadRecommendations(altId: string){
    return this.restApi.getRecommendedMovie(altId)
    .subscribe((data: Movie) => {  this.Movie = data; });
  }

}