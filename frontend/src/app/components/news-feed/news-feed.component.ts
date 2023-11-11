import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'c-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.less']
})
export class NewsFeedComponent implements OnInit {
  loading = true;
  news: any[] = [];

  constructor(private backend: BackendService) {
    //
  }

  ngOnInit(): void {
    this.loading = true;
    this.backend.getMockNews().then((data) => {
      this.news = data.news;
      this.loading = false;
    });
  }

}
