import { Component, OnInit } from '@angular/core';
import { IMovie } from './movie';

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

  movies: IMovie[] = [
    {
      id: 1,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/pt/8/82/Pulp_Fiction_cover.jpg',
      name: 'Pulp Fiction',
      duration: '2:34',
      boring: false,
      rating: 4.5,
    },
    {
      id: 2,
      imageUrl:
        'https://www.themoviedb.org/t/p/original/ode14q7WtDugFDp78fo9lCsmay9.jpg',
      name: 'The Maze Runner',
      duration: '1:53',
      boring: false,
      rating: 3.7,
    },
  ];

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
    this.movies = this.movies;
    this.filteredMovies = this.movies;
  }

  onRatingClicked(message: string): void {
    this.pageTitle = message;
  }
}
