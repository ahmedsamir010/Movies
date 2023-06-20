import { Component, OnInit } from '@angular/core';
import { MoviesApiService } from '../services/movies-api/movies-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imgPath: string = 'https://image.tmdb.org/t/p/w500';
  mediaType: string = "person";
  getMovies: any[] = [];
  getTv: any[] = [];
  getPeople: any[] = [];

  constructor(private _MoviesApiService: MoviesApiService) { }

  ngOnInit(): void {
    this.homeMovies();
    this.homeTv();
    this.homePeople();
  }

  homeMovies(): void {
    this._MoviesApiService.getTrendingHome('movie').subscribe({
      next: (response) => {
        this.getMovies = response.results.slice(0, 19);
      }
    });
  }

  homeTv(): void {
    this._MoviesApiService.getTrendingHome('tv').subscribe({
      next: (response) => {
        this.getTv = response.results.slice(0, 11);
      }
    });
  }

  homePeople(): void {
    this._MoviesApiService.getTrendingHome('person').subscribe({
      next: (response) => {
        this.getPeople = response.results.slice(4, 15);
      }
    });
  }
}
