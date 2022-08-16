import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMovie } from './movie';
import { Observable, catchError, tap, throwError, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MovieService {
  private movieUrl = 'api/movies/movies.json';
  constructor(private http: HttpClient) {}

  getMovies(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(this.movieUrl).pipe(
      tap((data) => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getMovie(id: number): Observable<IMovie | undefined> {
    return this.getMovies().pipe(
      map((movies: IMovie[]) => movies.find((p) => p.id === id))
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `Oh no! An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
