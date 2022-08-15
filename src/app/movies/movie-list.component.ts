import { Component } from '@angular/core';

@Component({
  selector: 'mc-movies',
  templateUrl: './movie-list.component.html',
})
export class MovieListComponent {
  pageTitle: String = 'Movie List';
  movies: any[] = [
    {
      id: 1,
      name: 'Pulp Fiction',
      duration: '2h 34m',
      boring: 'Nah',
      rating: '4.8',
    },
    {
      id: 2,
      name: 'Maze Runner',
      duration: '1h 53m',
      boring: 'Nah',
      rating: '4',
    },
  ];
}
