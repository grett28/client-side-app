import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
})
export class NavMenuComponent {
  constructor(private router: Router) {}
  searchword: string;
  isExpanded = false;
  searchTitle = '';

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  search(title: any) {
    if (title != '') {
      this.searchTitle = title;
      console.log('search-service!!!');
      console.log(this.searchTitle);
      this.router.navigate(['/add-movie', this.searchTitle]);
    } else {
      alert('Fill the name first!!!');
    }
  }
}
