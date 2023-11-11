import { Component, Inject, OnInit, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BackendService } from '../../services/backend.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'c-config-dialog',
  templateUrl: './config-dialog.component.html',
  styleUrls: ['./config-dialog.component.less'],
})
export class ConfigDialogComponent implements OnInit {
  tabOneCompleted = true;
  tabTwoCompleted = false;
  
  keywords = ['aluminium'];
  keyword: string = '';

  industries = ['construction', 'automotive'];
  industry: string = '';

  sources = ['https://news.metal.com/'];
  source: string = '';
  
  constructor(
    private backend: BackendService,
    public dialogRef: MatDialogRef<ConfigDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) {
      //
    }

  ngOnInit(): void {
    //
  }

  onSave(): void {
    // "news_sources": [
    //   "string"
    // ],
    // "keywords": [
    //   "string"
    // ],
    // "industries": [
    //   "string"
    // ],
    this.backend.setConfiguration({
      news_sources: this.sources,
      keywords: this.keywords,
      industries: this.industries
    });
    this.dialogRef.close();
  }

  add(list: string[], key: string): void {
    if (list.length > 0) {
      if (!list.includes(key)) {
        list.push(key);
      }
      key = '';
    }
  }

  remove(list: string[], key: string): void {
    const index = list.indexOf(key);
    if (index >= 0) {
      list.splice(index, 1);
    }
  }
}
