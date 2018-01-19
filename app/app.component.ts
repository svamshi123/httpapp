import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import {FormGroup} from '@angular/forms';
//import { OnInit } from '@angular/core';
//import { FormControl } from '@angular/forms';
//import { Validators } from '@angular/forms';
//import { FormArray } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent /*implements OnInit*/ {
  constructor(private router:Router){}
 /* genders = ['male','female'];
  signup: FormGroup;
  ngOnInit(){
   /* this.signup = new FormGroup({
      'username':new FormControl(null,Validators.required),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'gender': new FormControl('male'),
      'hobbies':new FormArray([]) 
    });
  }
 /* onsubmit(){
    console.log(this.signup);
    this.signup.reset();
  }
  onadd(){
    const countrol = new FormControl(null,Validators.required);
    (<FormArray>this.signup.get('hobbies')).push(countrol);
  }*/
  onlogin(){
    this.router.navigate(['/form']);
  }
  onsignup(){
    this.router.navigate(['./home']);
  }
}
