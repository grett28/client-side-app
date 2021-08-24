import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { RestApiService } from '../../services/rest-api.service';

@Component({
  selector: 'watchlist-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent{

  constructor(private modalService: NgbModal, public restApi: RestApiService) { }
  @Input() movieResult: any;
  @Input() name: string;
  @Input() posterPath: string;
  @Input() overview: string;

  open(content:any) {
    this.modalService.open(content);
  }

      // Get movie list
  addMovie(movie: any) {
    console.log(movie);
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
}
