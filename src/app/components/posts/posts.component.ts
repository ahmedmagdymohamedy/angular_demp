import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';
import { HtttpService } from 'src/app/services/htttp.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: any = [];
  selectedPost: any;
  constructor(private http: HtttpService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.http.getPosts().subscribe(data => {
      this.posts = data.posts;
      this.activeRoute.paramMap.subscribe((data: ParamMap) => {
        this.selectedPost = data.get('id')
      })
    });

  }

  goToPostDetails(id: number) {
    this.router.navigate(['/post', id])
  }

}
