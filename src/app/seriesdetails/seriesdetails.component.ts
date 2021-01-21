import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MovieService } from "../movie.service";
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-seriesdetails',
  templateUrl: './seriesdetails.component.html',
  styleUrls: ['./seriesdetails.component.scss']
})
export class SeriesdetailsComponent implements OnInit {

  ids:any;
 seriesDetails:any;
  imgBaseUrl:string="https://image.tmdb.org/t/p/original";
  loading:boolean = false;
  top4:any = [];
  constructor(public _ActivatedRoute:ActivatedRoute , public _MovieService:MovieService , private _Router:Router,
    _NgxSpinnerService:NgxSpinnerService) { 
    
      _NgxSpinnerService.show();
    this.ids = _ActivatedRoute.snapshot.paramMap.get("ids");
    
    _MovieService.getSeriesDetails(this.ids).subscribe(data => {
      this.seriesDetails = data;
      _NgxSpinnerService.hide();
      this.loading=true;
    }
    ,(err)=>{console.log(err)})

    _MovieService.getTrendingTv().subscribe(series =>{
      for (let i = 0; i <3; i++) {
        this.top4.push(series.results[i]);
        
      }
    })
  }

  ngOnInit(): void {
  }
}
