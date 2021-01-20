import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm=new FormGroup({
     'first_name':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(8)]),
     'last_name':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(8)]),
     'age':new FormControl(null,[Validators.required,Validators.min(18),Validators.max(50)]),
     'email':new FormControl(null,[Validators.required,Validators.email]),
     'password':new FormControl(null,[Validators.required]),
  })

  signUp(){
    this._AuthService.register(this.signupForm.value).subscribe(data=>{
      if(data.message=="success")
    {
      this.toastr.success(`Hello`, 'registeration successfully happenned!');
      this._Router.navigateByUrl("/signin")

    }
    else{
      this.toastr.error( 'Error occured during login!');

    }
    },
    err=>{console.log(err)}
    )
    
  }
  constructor(private _AuthService:AuthService,private _Router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  }

}
