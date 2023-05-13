import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserdataService } from '../../services/userdata.service';

//  @Injectable({
//    providedIn : 'root'
//  })

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  

 

  show = false;

  openpopup(){
    this.show = true;
  }

  closepopup(){
    this.show = false
  }

  closeoverlay(e:any){
    if(e.target.classList.contains('overlay')){
      this.show = false
    }
  }

urllink:string ="D:/kalpesh/ANGULAR/project/src/assets/blank-profile-picture-gf2f84182f_1280.png";
selectFiles(event:any){
  if(event.target.files){
    var reader = new FileReader()
    reader.readAsDataURL(event.target.files[0])
    reader.onload = (event:any)=>{
      this.urllink = event.target.result
    }
  }
} 
  
  
ngOnInit(): void {
  
}
  
  registerForm = new FormGroup({
    firstname: new FormControl("", [Validators.required, Validators.maxLength(20), Validators.pattern('[a-zA-z ]*')]),
    lastname: new FormControl(""),
    email: new FormControl(""),
    phone: new FormControl(""),
    age: new FormControl(""),
    state: new FormControl(""),
    country: new FormControl(""),
    address: new FormControl(""),
    tag: new FormControl(""),

    

  });


  //  users: any
  // constructor(private userData:UserdataService) {
  //   this.userData.users().subscribe((registerForm) => {
  //     this.users = registerForm;
  //   });
  //  }

   

    // registerSubmited(){
    
    //   this.userData.saveUsers(this.registerForm)
    //   .subscribe((result:any)=>{
    //      console.warn("result",result)
    //   })
    //   console.warn(this.registerForm.value);
    // }
  
    constructor(private http:HttpClient){}
  
     registerSubmited(){
       this.http.post('http://localhost:3000/posts', this.registerForm.value)
    .subscribe((result)=>{
      console.warn("result",result)
   })
   console.warn(this.registerForm.value);

     
   }

   

  get FirstName(): FormControl{
    return this.registerForm.get("firstname") as FormControl;
  }
}
