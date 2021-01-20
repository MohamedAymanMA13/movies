import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MovieService } from "../movie.service";
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-moviesdetails',
  templateUrl: './moviesdetails.component.html',
  styleUrls: ['./moviesdetails.component.scss']
})
export class MoviesdetailsComponent implements OnInit {
  id:any;
  moviesDetails:any;
  imgBaseUrl:string="https://image.tmdb.org/t/p/original";
  constructor(public _ActivatedRoute:ActivatedRoute , public _MovieService:MovieService , private _Router:Router,
    _NgxSpinnerService:NgxSpinnerService) { 
    
      _NgxSpinnerService.show();
    this.id = _ActivatedRoute.snapshot.paramMap.get("id");
    
    _MovieService.getMovieDetails(this.id).subscribe(data => {
      this.moviesDetails = data;
      _NgxSpinnerService.hide();
    }
    ,(err)=>{console.log(err)})
  }

  ngOnInit(): void {
  }

}
