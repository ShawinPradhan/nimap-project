import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
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
    
  constructor(){
    
  }

  ngOnInit(): void {
    

  }

  registerForm = new FormGroup({
    firstname: new FormControl("", [Validators.required, Validators.pattern('[a-zA-Z]')]),
    lastname: new FormControl(""),
    email: new FormControl(""),
    mobile: new FormControl(""),
    gender: new FormControl(""),

  });
  
  registerSubmited(){
    console.log(this.registerForm);
  }
  
  get FirstName(): FormControl{
    return this.registerForm.get("firstname")  as FormControl;
  }
}


