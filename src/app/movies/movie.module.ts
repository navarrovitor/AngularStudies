import { NgModule } from '@angular/core';
import { MovieListComponent } from './movie-list.component';
import { MovieDetailComponent } from './movie-detail.component';
import { CustomTimePipe } from '../shared/custom-time.pipe';
import { RouterModule } from '@angular/router';
import { MovieDetailGuard } from './movie-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MovieListComponent, MovieDetailComponent, CustomTimePipe],
  imports: [
    RouterModule.forChild([
      { path: 'movies', component: MovieListComponent },
      {
        path: 'movies/:id',
        canActivate: [MovieDetailGuard],
        component: MovieDetailComponent,
      },
    ]),
    SharedModule,
  ],
})
export class MovieModule {}
