import { Component, OnInit } from '@angular/core';
import { IMovie } from './movie';
import { MovieService } from './movie.service';

@Component({
  selector: 'mc-movies',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  pageTitle = '';
  imageWidth = 100;
  imageMargin = 2;
  showImage = true;

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
    this.movies = this.movieService.getMovies();
    this.filteredMovies = this.movies;
  }

  onRatingClicked(message: string): void {
    this.pageTitle = message;
  }
}
