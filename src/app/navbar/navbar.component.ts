import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from '../auth-guard.service';
import { AuthService } from "../auth.service";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  isShown: boolean = false ;
  constructor(private _router:Router ,private _AuthService:AuthService ) {
   

  }
  
  logout(){
    localStorage.removeItem("token");
    this._router.navigateByUrl("/signin")
  }
  loggedin(){
    
    return  localStorage.getItem('token')
    
  }
  toggleShow() {

    this.isShown = ! this.isShown;
    
    }
  ngOnInit(): void {
  }

}
