import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CardData } from '../../_interfaces/card-data.model';
import { RestApiService } from '../../services/rest-api.service';
import { Movie } from '../../_interfaces/movie.model';

@Component({
  selector: 'watchlist-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],

  animations: [
    trigger('cardFlip', [
      state('default', style({
        transform: 'none'
      })),
      state('flipped', style({
        transform: 'rotateY(180deg)'
      })),
      transition('default => flipped', [
        animate('400ms')
      ]),
      transition('flipped => default', [
        animate('400ms')
      ])
    ])
  ]
})

export class MovieCardComponent implements OnInit{
  @Input() movie: any;
  @Input() myList: boolean;

  recMovie: Movie;
  newMovie: Movie;
  status: string;
  errorMessage: string;

  data: CardData = {
    state: "default"
  };

  constructor(public restApi: RestApiService, private modalService: NgbModal) { }

  ngOnInit(){
    if(this.myList)
      this.loadRecommendations(this.movie.id);
  }
  //flip card on click
  cardClicked() {
    if (this.data.state === "default") {
      this.data.state = "flipped";
    } else {
      this.data.state = "default";
    }
  }

  //get movie recommendation
  loadRecommendations(movieId: string){
     return this.restApi.getRecommendedMovie(movieId)
    .subscribe((data: Movie) => {  this.recMovie = data; });
    }

  watchMovie(movieId: string){
    window.location.reload();
    console.log(movieId);
    return this.restApi.patchWatchMovie(movieId)
    .subscribe((data: Movie) => { this.newMovie = data; });
  }

  removeMovie(movieId: string){
    window.location.reload();
    return this.restApi.deleteMovie(movieId)
    .subscribe({
      next: data => {
          this.status = 'Delete successful';
      },
      error: error => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
      }
  });
  }

        // Get movie list
  addMovie(movie: Movie) {
    console.log(movie);
    window.location.reload();
    return this.restApi.postAddMovie(movie).
    subscribe(
      (val) => {
          console.log("POST call successful value returned in body", val);},
      response => {
        console.log("POST call in error", response);},
      () => {
          console.log("The POST observable is now completed.");
      });;
   }
        
   open(content:any) {
     this.modalService.open(content);
   }

   openLg(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }
}
