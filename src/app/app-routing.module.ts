import { SearchComponent } from './search/search.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { PeopleComponent } from './people/people.component';
import { TvComponent } from './tv/tv.component';
import { AboutComponent } from './about/about.component';
import { AuthGuardGuard } from './guard/auth-guard.guard';
import { GetdetailsComponent } from './getdetails/getdetails.component';

const routes: Routes =
 [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home", canActivate:[AuthGuardGuard],component:HomeComponent,title:"Home"},
  {path:"movies",canActivate:[AuthGuardGuard],component:MoviesComponent,title:"movies"},
  {path:"people",canActivate:[AuthGuardGuard],component:PeopleComponent,title:"people"},
  {path:"tv",canActivate:[AuthGuardGuard],component:TvComponent,title:"tv"},
  {path:"about",canActivate:[AuthGuardGuard],component:AboutComponent,title:"about"},
  {path:"details/:id/:mediaType",canActivate:[AuthGuardGuard],component:GetdetailsComponent,title:"details"},
  {path:"detailsPeople/:id/:mediaType",canActivate:[AuthGuardGuard],component:PeopleDetailsComponent,title:"dedetailsPerson"},
  {path:"search",canActivate:[AuthGuardGuard],component:SearchComponent,title:"search"},


  {path:"register",component:RegisterComponent,title:"Sign Up"},
  {path:"login",component:LoginComponent,title:"Sign In"},

  {path:"**",component:NotfoundComponent,title:"Not Found"},

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true,scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
