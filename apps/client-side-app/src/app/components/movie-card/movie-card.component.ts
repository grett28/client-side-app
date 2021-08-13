import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

import { FormModalService } from '../form-modal/form-modal.service';
import { CardData } from 'apps/client-side-app/src/app/_interfaces/card-data.model';
import { RestApiService } from 'apps/client-side-app/src/app/services/rest-api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],

  animations: [
    trigger('cardFlip', [
      state(
        'default',
        style({
          transform: 'none',
        })
      ),
      state(
        'flipped',
        style({
          transform: 'rotateY(180deg)',
        })
      ),
      transition('default => flipped', [animate('400ms')]),
      transition('flipped => default', [animate('400ms')]),
    ]),
  ],
})
export class MovieCardComponent implements OnInit {
  @Input() movie: any;
  @Input() myList: boolean;

  recMovie: any = [];
  Movie: any = [];
  status: string;
  errorMessage: string;

  data: CardData = {
    state: 'default',
  };

  constructor(
    private modalService: FormModalService,
    public restApi: RestApiService
  ) {}

  ngOnInit() {
    if (this.myList) this.loadRecommendations(this.movie.id);
  }
  //flip card on click
  cardClicked() {
    if (this.data.state === 'default') {
      this.data.state = 'flipped';
    } else {
      this.data.state = 'default';
    }
  }

  //open Modal on click
  openModal(id: string) {
    this.modalService.open(id);
  }

  //close Modal on click
  closeModal(id: string) {
    this.modalService.close(id);
    console.log(this.Movie);
    this.reloadCurrentPage();
  }

  //get movie recommendation
  loadRecommendations(movieId) {
    return this.restApi.getRecommendedMovie(movieId).subscribe((data: {}) => {
      this.recMovie = data;
    });
  }

  watchMovie(movieId) {
    window.location.reload();
    console.log(movieId);
    return this.restApi.patchWatchMovie(movieId).subscribe((data: {}) => {
      this.Movie = data;
    });
  }

  removeMovie(movieId) {
    window.location.reload();
    return this.restApi.deleteMovie(movieId).subscribe({
      next: (data) => {
        this.status = 'Delete successful';
      },
      error: (error) => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      },
    });
  }

  // Get movie list
  addMovie(movie) {
    console.log(movie);
    return this.restApi.postAddMovie(movie).subscribe(
      (val) => {
        console.log('POST call successful value returned in body', val);
      },
      (response) => {
        console.log('POST call in error', response);
      },
      () => {
        console.log('The POST observable is now completed.');
      }
    );
  }

  reloadCurrentPage() {
    window.location.reload();
  }
}
