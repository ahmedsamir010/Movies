import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {

  constructor(private _HttpClient:HttpClient,private _Router:Router) { }

  getTrendingHome(media:string): Observable<any>
  {
      return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${media}/day?api_key=`);

  }
  getDetails(id:string,media:string): Observable<any>
  {
      return this._HttpClient.get(`https://api.themoviedb.org/3/${media}/${id}?api_key=&language=ar-Eg`);
  }
  getSimilar(id:string,media:string): Observable<any>
  {
      return this._HttpClient.get(`https://api.themoviedb.org/3/${media}/${id}/similar?api_key=&language=ar-Eg&page=1`);
  }

  getTrending(media:string): Observable<any>
  {
      return this._HttpClient.get(`https://api.themoviedb.org/3/discover/${media}?api_key=&language=ar-Eg&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`);
  }
  getPeople(): Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/popular?api_key=&language=ar-Eg&page=1`)
  }
  getPeopleDetails(id:any,media:string): Observable<any>
  {
      return this._HttpClient.get(`https://api.themoviedb.org/3/${media}/${id}?api_key=&language=ar-Eg`);
  }
  getSearch(keyword:any):Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/search/multi?api_key=&language=ar-Eg&query=${keyword}&page=1&include_adult=false`)
  }


}
