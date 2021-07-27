import { Component, OnInit } from '@angular/core';

import { FormModalService } from '../form-modal/form-modal.service';

@Component({ templateUrl: 'watched.component.html' })
export class WatchedComponent implements OnInit {
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
