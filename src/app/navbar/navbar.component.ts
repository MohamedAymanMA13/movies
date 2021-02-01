import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from '../auth-guard.service';
import { AuthService } from "../auth.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  Signin:string="/signup"
  constructor(private _router:Router ,private _ActivatedRoute:ActivatedRoute) {
    this.Signin = _ActivatedRoute.snapshot.paramMap.get("/Signin");
    
  }
  
  logout(){
    localStorage.removeItem("token");
    this._router.navigateByUrl("/signin")
  }
  loggedin(){
    
    return  localStorage.getItem('token')
    
  }
  isSigninRoute() {
    return this._router.routerState.snapshot.url === '/signup';
    // this._router.url.includes('/signup');
  }
  isSignupRoute() {
    
    return this._router.url.includes('/signin');
  }
  ngOnInit(): void {
  }

}
