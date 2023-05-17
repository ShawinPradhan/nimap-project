import { Component } from '@angular/core';
import { ActivatedRoute }from '@angular/router';
import { UserdataService } from '../../services/userdata.service';
import { tap } from 'rxjs';
import { User } from 'src/app/user';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {

  users!: User[];
  // data: any;

  // constructor(private dataService: UserdataService) {}

    ngOnInit(){
      this.users = [
        {
          "firstName":"Kalpesh",
          "lastName":"Naik",
          "address":"Pune",
          "phone":"9876543210",
          "email":"kalpesh@gmail.com",
          "state":"Maharahstra",
          "age":22,
          "country":"India"
        }
      ]
      };

    }




