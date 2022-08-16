import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  pageTitle: string = 'Movie detail';

  constructor() {}

  ngOnInit(): void {}
}
