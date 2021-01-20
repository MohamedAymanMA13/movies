import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {

  TrendingTv:any[]=[];
  imgBaseUrl:string="https://image.tmdb.org/t/p/original";
  constructor(_MovieService:MovieService,private _Router:Router,
     _NgxSpinnerService:NgxSpinnerService) 
  { 
    
    _NgxSpinnerService.show();
     _MovieService.getTrendingTv().subscribe((data)=>{
       this.TrendingTv=data.results;
       _NgxSpinnerService.hide();

     }
     ,(err)=>{console.log(err)})
  }

  ngOnInit(): void {
  }
}
