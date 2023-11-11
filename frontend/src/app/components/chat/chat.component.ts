import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'c-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.less']
})
export class ChatComponent implements OnInit {
  @ViewChild("virtualScroll", { static: true })
  public virtualScrollViewport: CdkVirtualScrollViewport | undefined;
  
  items: any[] = [];
  message: string = ''

  constructor(public backend: BackendService) {
    this.backend.conversation$.subscribe(conversation => {
      this.items = [...conversation];
      this.virtualScrollViewport?.scrollToIndex(this.items.length - 1);
    })
  }

  ngOnInit(): void {
    //
  }

  public sendMessage(): void {
    this.backend.sendMessage(this.message);
    this.message = '';
  }

}
