import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { FormModalService } from '../form-modal/form-modal.service';
import { CardData } from 'src/app/_interfaces/card-data.model';
import { RestApiService } from 'src/app/services/rest-api.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-movie-card',
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

export class MovieCardComponent{
  @Input() imageURI: string;
  @Input() title: string;
  @Input() overview: string;
  @Input() movieId: string;
  subscription: Subscription = new Subscription();
  Movie: any = [];

  recPoster: string;
  recName: string;
  recOverview: string;

  data: CardData = {
    state: "default"
  };

  constructor(private modalService: FormModalService, public restApi: RestApiService) { }

  //flip card on click
  cardClicked() {
    if (this.data.state === "default") {
      this.data.state = "flipped";
    } else {
      this.data.state = "default";
    }
  }

  //open Modal on click
  openModal(id: string) {
    this.modalService.open(id);
  }

  //close Modal on click
  closeModal(id: string) {
    this.modalService.close(id);
    this.subscription.unsubscribe();
    //this.Movie = [];
    console.log(this.Movie);
  }

  //get movie recommendation
  loadRecommendations(movieId){
     return this.restApi.getRecommendedMovie(movieId)
    .subscribe((data: {}) => {  this.Movie = data; });
    }
}
