import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';
import { FormModalService } from '../form-modal/form-modal.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent{

  constructor(private modalService: FormModalService, public restApi: RestApiService) { }
  @Input() movieResult: any;
  @Input() name: string;
  @Input() posterPath: string;
  @Input() overview: string;

    //open Modal on click
    openModal(id: string) {
      this.modalService.open(id);
    }
  
    //close Modal on click
    closeModal(id: string) {
      this.modalService.close(id);
    }

      // Get movie list
  addMovie(movie) {
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
