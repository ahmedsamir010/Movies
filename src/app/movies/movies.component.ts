import { Component, OnInit } from '@angular/core';
import { MoviesApiService } from '../services/movies-api/movies-api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  mediaType: string = 'movie';
  trendingMovies: any = [];
  imgPath: string = 'https://image.tmdb.org/t/p/w500';

  constructor(private _MoviesApiService: MoviesApiService) { }

  ngOnInit(): void {
    this.getTrending();
  }

  getTrending() {
    this._MoviesApiService.getTrending("movie").subscribe({
      next: (response) => {
        this.trendingMovies = response.results;
      }
    });
  }
}
