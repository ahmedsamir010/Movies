import { Component, OnInit } from '@angular/core';
import { MoviesApiService } from '../services/movies-api/movies-api.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {
  mediaType:string='tv';
  trendingTvs:any=[];
  imgPath: string = 'https://image.tmdb.org/t/p/w500';
  constructor(private _MoviesApiService:MoviesApiService) { }

  ngOnInit(): void {
    this.getTrending()
  }



getTrending()
{
  this._MoviesApiService.getTrending("tv").subscribe({
    next:(response)=>{

      this.trendingTvs=response.results;
    }
  })
}


}
