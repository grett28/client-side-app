import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from '../_interfaces/movie.model';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {
  
  // Define API
  apiURL = 'https://localhost:44394';

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  // HttpClient API get() method => Fetch movie list
  getMovies(): Observable<Movie> {
    return this.http.get<Movie>(this.apiURL + '/movies')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  //HttpClient API get() method => Fetch unwatched movie list
  getUnwatchedMovies(): Observable<Movie>{
    return this.http.get<Movie>(this.apiURL + '/unwatched')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  //HttpClient API get() method => Fetch watched movie list
  getWatchedMovies(): Observable<Movie>{
    return this.http.get<Movie>(this.apiURL + '/watched')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API get() method => Fetch movie
  getMovie(id: string): Observable<Movie> {
    return this.http.get<Movie>(this.apiURL + '/movies/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API get() method => Get Recommended movie
  getRecommendedMovie(id: string): Observable<Movie> {
    return this.http.get<Movie>(this.apiURL + '/recommendation/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  //HttpClient API get() method => Get search results
  getSearchMovie(title: string): Observable<Movie> {
    return this.http.get<Movie>(this.apiURL + '/search/' + title)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  //HttpClient API post() method => Add movie 
  postAddMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.apiURL + '/add', movie, this.httpOptions)
    .pipe(
      retry(1),
    catchError(this.handleError)
    )
  }

  //HttpClient API patch() method => Watch movie
  patchWatchMovie(id: string): Observable<Movie> {
    return this.http.patch<Movie>(this.apiURL + '/watch/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  //HttpClient API delete() method => Delete movie
  deleteMovie(id: string): Observable<Movie>{
    return this.http.delete<Movie>(this.apiURL + '/delete/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  //HttpGet API get() methos => Get popular movies
  getPopular(): Observable<Movie>{
    return this.http.get<Movie>(this.apiURL + '/popular')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API put() method => Update employee
 /* updateMovie(id, employee): Observable<Employee> {
    return this.http.put<Employee>(this.apiURL + '/employees/' + id, JSON.stringify(employee), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }*/

  // HttpClient API delete() method => Delete employee
  /*deleteEmployee(id){
    return this.http.delete<Employee>(this.apiURL + '/employees/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }*/

// Error handling 
  handleError(error: any) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }
}