import { Component, OnInit } from '@angular/core';
import { HtttpService } from 'src/app/services/htttp.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any = [];
  constructor(private http: HtttpService) { }

  ngOnInit(): void {
    this.http.getUsers().subscribe(data => {
      console.log(data);
      this.users = data.data;
    });
  }

}
