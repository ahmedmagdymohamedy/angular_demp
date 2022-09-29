import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HtttpService } from 'src/app/services/htttp.service';

@Component({
  selector: 'app-posts-details',
  templateUrl: './posts-details.component.html',
  styleUrls: ['./posts-details.component.scss']
})
export class PostsDetailsComponent implements OnInit {

  constructor(private http: HtttpService, private activeRoute: ActivatedRoute, private router: Router) { }

  post: any;
  postID: number = 0;

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((data) => {
      this.postID = parseInt(data.get('id') || '0');
      this.http.getPost(this.postID).subscribe(data => {
        this.post = data
      })
    });
  }

  back() {
    this.router.navigate(['/posts', { id: this.postID }]);

  }

}
