import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  genders = ['male','female'];
  signup: FormGroup;
  ngOnInit(){
    this.signup = new FormGroup({
      'username':new FormControl(null,Validators.required),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'gender': new FormControl('male'),
      'age':new FormControl(null),
      'place':new FormControl(null),
      'hobbies':new FormArray([]),
      'password':new FormControl(null),
      'cpassword':new FormControl(null) 
    });
  }
  onsubmit(){
    console.log(this.signup);
   this.signup.reset();
  }
  onadd() {
    const control = new FormControl(null,Validators.required);
    (<FormArray>this.signup.get('hobbies')).push(control);
  }
}
