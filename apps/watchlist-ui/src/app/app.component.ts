import { Component, HostBinding, OnInit } from '@angular/core';
import { ThemingService } from './services/theme.service';

@Component({
  selector: 'watchlist-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  constructor(private themingService: ThemingService) { }
  @HostBinding('class') public cssClass: string;

  ngOnInit() {
    this.themingService.theme.subscribe((theme: string) => {
      this.cssClass = theme;
    });
  }
}
