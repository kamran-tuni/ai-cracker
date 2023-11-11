import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'c-chat-element',
  templateUrl: './chat-element.component.html',
  styleUrls: ['./chat-element.component.less']
})
export class ChatElementComponent implements OnInit {
  @Input() name: string = '';
  @Input() message: string = '';
  

  constructor() {
    //
  }

  ngOnInit(): void {
  }

}
