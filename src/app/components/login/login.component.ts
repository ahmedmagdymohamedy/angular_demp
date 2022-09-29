import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/my-types/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  socialMedia: string[] = ["facebook", "twitter", "google"];
  userData: User;

  constructor() {
    this.userData = new User('', '', '', '', '');
  }

  ngOnInit(): void {

  }

  onSubmit(formData: NgForm) {
    console.log(this.userData);



  }

}
