import { Component, OnInit } from '@angular/core';
import {UserApiService} from '../../service/user-api-service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userApiService: UserApiService) { }

  ngOnInit() {

    this.userApiService.getUsers().subscribe({
      next: value => console.log(value)
    });

    this.userApiService.getUser().subscribe({
      next: value => console.log(value)
    });
  }

}
