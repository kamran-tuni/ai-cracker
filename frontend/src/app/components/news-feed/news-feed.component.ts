import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'c-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.less']
})
export class NewsFeedComponent {
  loading = true;
  news: any[] = [];

  constructor(private backend: BackendService) {
    this.backend.news$.subscribe(news => {
      this.news = [...news];
      if (this.news.length > 0) {
        this.loading = false;
      }
    });
  }
}
