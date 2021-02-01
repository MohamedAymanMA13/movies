import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MovieService } from "../movie.service";
import { Router ,NavigationEnd } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-moviesdetails',
  templateUrl: './moviesdetails.component.html',
  styleUrls: ['./moviesdetails.component.scss']
})
export class MoviesdetailsComponent implements OnInit {
  id:any;
  moviesDetails:any;
  imgBaseUrl:string="https://image.tmdb.org/t/p/original";
  loading:boolean = false;
  top4:any = [];
  constructor(public _ActivatedRoute:ActivatedRoute , public _MovieService:MovieService , private _Router:Router,
    _NgxSpinnerService:NgxSpinnerService) { 
      _Router.events.pipe(
        filter(event => event instanceof NavigationEnd)  
      ).subscribe((event: NavigationEnd) => {
         _NgxSpinnerService.show();
    this.id = _ActivatedRoute.snapshot.paramMap.get("id");
    
    _MovieService.getMovieDetails(this.id).subscribe(data => {
      this.moviesDetails = data;
      _NgxSpinnerService.hide();
      this.loading=true;
    }
    ,(err)=>{console.log(err)})

    _MovieService.getTrendingMovies().subscribe(data =>{
      this.top4=[]
      for (let i = 0; i <4; i++) {
        
        this.top4.push(data.results.filter(x => x.id !=this.id)[i]);
     
      }
      });
      
     

      
      // for(var i=0; i < this.top4.length; i++) {
      //   if(this.top4[i].id == this.id)
      //   {
      //     this.top4.splice(i,1);
      //   }
      // }
      


      // console.log(data.results.filter(x => x.id !=this.id));
      // console.log(this.id);
      // console.log(this.top4.filter(x => x.id !==this.id));
      // console.log(this.id)


      // let s=this.top4.filter(x => x.id  != this.id);
      // console.log(s)


      // let A=this.top4.filter(x => x  !== s);
      // console.log(A);

      // let index = this.top4.map((item) => item).indexOf(s);
      // if (index > -1) {
      //   this.top4.splice(index, 1);
      //     console.log(this.top4);
      // }

      // this.top4.splice(this.top4.indexOf(this.id),1);
      // console.log(this.top4);


      


      // for( var i = 0; i < this.top4.length; i++){ 
    
      //   if ( this.top4[i] === s) { 
    
      //     this.top4.splice(i, 1); 
      //   }
        
    
      // }



      
      
    })
  //  console.log(this._Router);
  
    
  }


 
  
  

  ngOnInit(): void {
  }

}
