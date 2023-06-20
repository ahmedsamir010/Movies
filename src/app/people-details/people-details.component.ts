import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthApiService } from '../services/auth/auth-api.service';
import { MoviesApiService } from '../services/movies-api/movies-api.service';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss']
})
export class PeopleDetailsComponent implements OnInit {
  peopleDetails:any=[];
  similars:any=[];
  mediaType:string='';
  imgPath: string = 'https://image.tmdb.org/t/p/w500';
  constructor(private _MoviesApiService:MoviesApiService,private _ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getPeopleDetails();
  }
  getPeopleDetails()
  {
    let {id,mediaType}=this._ActivatedRoute.snapshot.params;
    this.mediaType=mediaType;
this._MoviesApiService.getPeopleDetails(id,mediaType).subscribe({
  next:(response)=>{

this.peopleDetails=response;
  }
});





}













}
