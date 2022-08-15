import { Injectable } from '@angular/core';
import { IMovie } from './movie';

@Injectable({ providedIn: 'root' })
export class MovieService {
  getMovies(): IMovie[] {
    return [
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
  }
}
