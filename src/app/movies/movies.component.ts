import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  trendingMovies:any[]=[];
  imgBaseUrl:string="https://image.tmdb.org/t/p/original";
  constructor(_MovieService:MovieService,private _Router:Router,
     _NgxSpinnerService:NgxSpinnerService) 
  { 
    
    _NgxSpinnerService.show();
     _MovieService.getTrendingMovies().subscribe((data)=>{
       this.trendingMovies=data.results;
       _NgxSpinnerService.hide();

     }
     ,(err)=>{console.log(err)})
  }

  ngOnInit(): void {
  }

}
