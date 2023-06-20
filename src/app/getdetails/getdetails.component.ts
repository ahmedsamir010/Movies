import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthApiService } from '../services/auth/auth-api.service';
import { MoviesApiService } from '../services/movies-api/movies-api.service';

@Component({
  selector: 'app-getdetails',
  templateUrl: './getdetails.component.html',
  styleUrls: ['./getdetails.component.scss']
})
export class GetdetailsComponent implements OnInit {
  details: any = [];
  similars: any = [];
  mediaType: string = '';
  imgPath: string = 'https://image.tmdb.org/t/p/w500';

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _MoviesApiService: MoviesApiService
  ) { }

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails() {
    const { id, mediaType } = this._ActivatedRoute.snapshot.params;
    this.mediaType = mediaType;

    this._MoviesApiService.getDetails(id, mediaType).subscribe({
      next: (response) => {
        this.details = response;
      }
    });

    this._MoviesApiService.getSimilar(id, mediaType).subscribe({
      next: (response) => {
        this.similars = response.results;
      }
    });
  }

  getSimilar(id: string, mediaType: string) {
    this._MoviesApiService.getSimilar(id, mediaType).subscribe({
      next: (response) => {
        this.similars = response.results;
      }
    });

    this._MoviesApiService.getDetails(id, mediaType).subscribe({
      next: (response) => {
        this.details = response;
      }
    });
  }
}
