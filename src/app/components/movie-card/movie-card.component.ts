import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { FormModalService } from '../form-modal/form-modal.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],

  animations: [
    trigger('cardFlip', [
      state('false', style({ transform: 'none' })),
      state('true', style({ transform: 'rotateY(180deg)' })),
      transition('false => true', animate('600ms ease-out')),
      transition('true => false', animate('600ms ease-out')),
    ]),
    ],
})

export class MovieCardComponent implements OnInit{
  @Input() imageURI: string;
  @Input() title: string;
  @Input() overview: string;

  bodyText: string;

  constructor(private modalService: FormModalService) { }

  ngOnInit() {
    this.bodyText = 'This text can be updated in modal 1';
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
