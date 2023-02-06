import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name = "";
  email = "";
  password = "";

  constructor(private fb:FormBuilder, private ds:DataService,private router:Router) { }

  //registration model
  registerForm = this.fb.group({
    name:['',[Validators.required,Validators.pattern('[a-z A-Z]*')]],
    email:['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    password:['',[Validators.required,Validators.minLength(5),Validators.pattern('[a-zA-Z0-9]*')]]

  })

  ngOnInit(): void {
  }
   
  register(){
    console.log(this.registerForm);

    let name = this.registerForm.value.name;
    let email = this.registerForm.value.email;
    let password = this.registerForm.value.password;

    if(this.registerForm.valid){
      console.log(this.registerForm.get('email')?.errors); //valid or not
      this.ds.register(name,email,password)
      .subscribe((result:any)=>{
        alert(result.message);
        this.router.navigateByUrl('')

      },
      result=>{
        alert(result.error.message);  
      })
      
    }
    
  }


}
