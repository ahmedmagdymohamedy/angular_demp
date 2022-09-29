import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  imageURL: string = "assets/me.jpg";

  ngOnInit(): void {
  }

  goToRegster() {
    this.router.navigate(['/rigster']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

}
