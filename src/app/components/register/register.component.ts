import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/my-types/user';
import { HtttpService } from 'src/app/services/htttp.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  socialMedia: string[] = ["facebook", "twitter", "google"];
  userData: User;

  constructor(private http: HtttpService) {
    this.userData = new User('', '', '', '', '');
  }

  ngOnInit(): void {

  }

  onSubmit(formData: NgForm) {
    // console.log(formData);
    // console.log(this.userData);
    this.http.postUser(this.userData).subscribe(data => {
      console.log(data);

    });

  }
}
