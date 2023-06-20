import { Component, OnInit } from '@angular/core';
import { MoviesApiService } from '../services/movies-api/movies-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
searchMovies:any="";
keyword:string='';
imgPath: string = 'https://image.tmdb.org/t/p/w500';
constructor(private _MoviesApiService:MoviesApiService) { }
  ngOnInit(): void {}

  getSearch(keyword: any  )
{

  this._MoviesApiService.getSearch(keyword).subscribe({
    next:(response)=>{
console.log(response);
this.searchMovies=Array.from(response.results);
console.log(this.searchMovies);

    }
  })

}
}
