import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { WatchedComponent } from './components/watched/watched.component';
import { FetchDataComponent } from './components/fetch-data/fetch-data.component';
import { AllMoviesComponent } from './components/all-movies/all-movies.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'watchlist', component: WatchlistComponent },
  { path: 'watched', component: WatchedComponent },
  { path: 'fetch-data', component: FetchDataComponent },
  { path: 'all-movies', component: AllMoviesComponent},
  { path: 'add-movie/:title', component: AddMovieComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
