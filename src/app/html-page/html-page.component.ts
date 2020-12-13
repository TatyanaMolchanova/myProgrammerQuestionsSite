import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostsService} from '../shared/posts.service';
import {Post} from '../shared/interfaces';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-html-page',
  templateUrl: './html-page.component.html',
  styleUrls: ['./html-page.component.scss']
})
export class HtmlPageComponent implements OnInit, OnDestroy {

  posts: Post[]
  pSub: Subscription

  constructor(private PostsService: PostsService) { }

  ngOnInit() {
    this.pSub = this.PostsService.getAll().subscribe(posts => {
      this.posts = posts
    })
  }

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe()
    }
  }

}
