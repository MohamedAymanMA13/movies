import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MovieService } from "../movie.service";
import { Router, NavigationEnd } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-seriesdetails',
  templateUrl: './seriesdetails.component.html',
  styleUrls: ['./seriesdetails.component.scss']
})
export class SeriesdetailsComponent implements OnInit {

  ids: any;
  seriesDetails: any;
  imgBaseUrl: string = "https://image.tmdb.org/t/p/original";
  loading: boolean = false;
  top4: any = [];
  constructor(public _ActivatedRoute: ActivatedRoute, public _MovieService: MovieService, private _Router: Router,
    _NgxSpinnerService: NgxSpinnerService) {
    this._ActivatedRoute.paramMap.subscribe(params => {
      _NgxSpinnerService.show();
      this.ids = _ActivatedRoute.snapshot.paramMap.get("ids");

      _MovieService.getSeriesDetails(this.ids).subscribe(data => {
        this.seriesDetails = data;
        _NgxSpinnerService.hide();
        this.loading = true;
      }
        , (err) => { console.log(err) })

      _MovieService.getTrendingTv().subscribe(series => {
        this.top4 = []
        for (let i = 0; i < 4; i++) {

          this.top4.push(series.results.filter(x => x.id != this.ids)[i]);

        }

      })
    })
  }

  ngOnInit() {
    console.log()
  }
}
