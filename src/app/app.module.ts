import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movies/movie-list.component';
import { CustomTimePipe } from './shared/custom-time.pipe';

@NgModule({
  declarations: [AppComponent, MovieListComponent, CustomTimePipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
