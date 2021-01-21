import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

import { MoviesComponent } from './movies/movies.component';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { ErrorComponent } from './error/error.component';
import { TvComponent } from './tv/tv.component';
import { MoviesdetailsComponent } from './moviesdetails/moviesdetails.component';
import { SeriesdetailsComponent } from './seriesdetails/seriesdetails.component';



const routes: Routes =
[ 
  {path:'',redirectTo:'movies',pathMatch:'full'},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'series',component:TvComponent,canActivate:[AuthGuardService]},
  {path:'movies',component:MoviesComponent,canActivate:[AuthGuardService]},
  {path:'moviesdetails/:id',component:MoviesdetailsComponent,canActivate:[AuthGuardService]},
  {path:'seriesdetails/:ids',component:SeriesdetailsComponent,canActivate:[AuthGuardService]},

  



  {path:'**',component:ErrorComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
