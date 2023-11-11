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
  tabThreeCompleted = false;
  
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
    this.backend.setConfiguration({
      news_sources: this.sources,
      keywords: this.keywords,
      industries: this.industries
    });
    this.dialogRef.close();
  }

  addKeyword(): void {
    if (this.keywords.length > 0) {
      if (!this.keywords.includes(this.keyword)) {
        this.keywords.push(this.keyword);
      }
      this.keyword = '';
    }
  }

  addIndustry(): void {
    if (this.industries.length > 0) {
      if (!this.industries.includes(this.industry)) {
        this.industries.push(this.industry);
      }
      this.industry = '';
    }
  }

  addSource(): void {
    if (this.sources.length > 0) {
      if (!this.sources.includes(this.source)) {
        this.sources.push(this.source);
      }
      this.source = '';
    }
  }

  remove(list: string[], key: string): void {
    const index = list.indexOf(key);
    if (index >= 0) {
      list.splice(index, 1);
    }
  }
}
