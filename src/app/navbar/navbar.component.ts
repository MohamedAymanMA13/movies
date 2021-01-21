import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  login:boolean = false;
  constructor(private _router:Router) {
    
  }
  
  logout(){
    localStorage.removeItem("token");
    this._router.navigateByUrl("/signin")
    
  }
  
  
  ngOnInit(): void {
  }

}
