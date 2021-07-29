import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { WatchedComponent } from './components/watched/watched.component';
import { FetchDataComponent } from './components/fetch-data/fetch-data.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { FormModalComponent } from './components/form-modal/form-modal.component';
import { AllMoviesComponent } from './components/all-movies/all-movies.component';
import { RecommendationComponent } from './components/recommendation/recommendation.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    WatchedComponent,
    FetchDataComponent,
    MovieCardComponent,
    FormModalComponent,
    AllMoviesComponent,
    RecommendationComponent,
    AddMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'watched', component: WatchedComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      {path: 'all-movies', component: AllMoviesComponent},
      {path: 'add-movie', component: AddMovieComponent}
    ])
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
