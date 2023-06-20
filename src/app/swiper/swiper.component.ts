import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from 'swiper';
import { MoviesApiService } from '../services/movies-api/movies-api.service';

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination,Autoplay]);

@Component({
  selector: 'app-swiper',
  template: `<swiper
    [effect]="'coverflow'"
    [grabCursor]="true"
    [centeredSlides]="true"
    [slidesPerView]="'auto'"
    [loop]="true"
    [autoplay]="{
      delay: 1500,
      disableOnInteraction: true
    }"
    [coverflowEffect]="{
      rotate: 50,
      stretch: 0,
      depth: 80,
      modifier: 3,
      slideShadows: true
    }"
    [pagination]="false"
    class="mySwiper"
  >
    <ng-template class="swiperSlide"  swiperSlide *ngFor="let item of swiper"
      ><img [src]="imgPath + item.poster_path"
    /></ng-template>
  </swiper>`,
  styleUrls: ['./swiper.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SwiperComponent implements OnInit {
  swiper:any[]=[];
  imgPath: string = 'https://image.tmdb.org/t/p/w500';
  constructor(private _MoviesApiService: MoviesApiService) {}
  ngOnInit(): void {
    this._MoviesApiService.getTrendingHome("tv").subscribe({
      next: (response) => {
    this.swiper=response.results;

      },
    });
  }
}
