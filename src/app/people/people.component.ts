import { Component, OnInit } from '@angular/core';
import { MoviesApiService } from '../services/movies-api/movies-api.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
 mediaType:string="person";
  trendingPeople:any=[];
  imgPath: string = 'https://image.tmdb.org/t/p/w500';
  constructor(private _MoviesApiService:MoviesApiService) { }

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople()
  {
    this._MoviesApiService.getPeople().subscribe({
      next:(response)=>{
        this.trendingPeople=response.results;
      }
    })
  }




}
