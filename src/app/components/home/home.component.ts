import { Component, OnInit, ViewChild } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {

  Movie: any = []

  constructor( public restApi: RestApiService ) {}

  ngOnInit() {
    this.loadPopular()
  }

  loadPopular(){
    return this.restApi.getPopular()
    .subscribe((data: {}) => {  this.Movie = data; })
  }
}
