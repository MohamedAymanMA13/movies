import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signinForm=new FormGroup({
    'email':new FormControl(null,[Validators.required,Validators.email]),
    'password':new FormControl(null,[Validators.required]),
 })

 signIn(){

  this._AuthService.login(this.signinForm.value).subscribe(data=>{
    console.log(data)
    if(data.message=="success")
    {
      this.toastr.success(`Hello ${data.user.first_name}`, 'login successfully happenned!');
      localStorage.setItem('token',data.token)
      this._Router.navigateByUrl("/movies")
      
    }
    else{
      this.toastr.error( 'Error occured during login!');

    }
  
  },
  err=>{console.log(err)}
  )
  
}
constructor(private _AuthService:AuthService,private _Router:Router,
  private toastr: ToastrService) {

   }


  ngOnInit(): void {
  }

}
