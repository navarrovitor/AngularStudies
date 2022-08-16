import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IMovie } from './movie';
import { MovieService } from './movie.service';

@Component({
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit, OnDestroy {
  pageTitle = 'Movie List';
  imageWidth = 100;
  imageMargin = 2;
  showImage = true;
  errorMessage: string = '';
  sub!: Subscription;

  private _listFilter: string = '';

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredMovies = this.doFilter(value);
  }

  filteredMovies: IMovie[] = [];

  movies: IMovie[] = [];

  constructor(private movieService: MovieService) {}

  doFilter(filterBy: string): IMovie[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.movies.filter((movie: IMovie) =>
      movie.name.toLocaleLowerCase().includes(filterBy)
    );
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.sub = this.movieService.getMovies().subscribe({
      next: (movies) => {
        this.movies = movies;
        this.filteredMovies = this.movies;
      },
      error: (err) => (this.errorMessage = err),
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onRatingClicked(message: string): void {
    this.pageTitle = message;
  }
}
