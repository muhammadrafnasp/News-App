import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

email="";
password="";  

  constructor(private fb:FormBuilder, private ds:DataService, private router:Router) {}

  //login model
  loginForm = this.fb.group({
    email:['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    password:['',[Validators.required,Validators.minLength(5),Validators.pattern('[a-zA-Z0-9]*')]]
  })

  ngOnInit(): void {
  }

  login(){
    console.log(this.loginForm);

    let email = this.loginForm.value.email;
    let password = this.loginForm.value.password;


    if(this.loginForm.valid){
      this.ds.login(email,password)
       .subscribe((result:any)=>{
        localStorage.setItem('currentUser',JSON.stringify(result.currentUser));
        localStorage.setItem('currentEmail',JSON.stringify(result.currentEmail));
        localStorage.setItem('token',JSON.stringify(result.token));
        alert(result.message)
        this.router.navigateByUrl('home')
       },
       result=>{
        alert(result.error.message)
       }
       
       ) 
      
    }
    
  }

}
