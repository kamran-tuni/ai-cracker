import { Component, Inject, OnInit, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'c-config-dialog',
  templateUrl: './config-dialog.component.html',
  styleUrls: ['./config-dialog.component.less'],
})
export class ConfigDialogComponent implements OnInit {
  keywords = ['aluminium'];
  keyword: string = '';
  
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
    this.backend.setMockNews(); // TODO remove
    this.dialogRef.close();
  }

  addKeyword(): void {
    if (this.keyword.length > 0) {
      if (!this.keywords.includes(this.keyword)) {
        this.keywords.push(this.keyword);
      }
      this.keyword = '';
    }
  }

  remove(key: string): void {
    const index = this.keywords.indexOf(key);
    if (index >= 0) {
      this.keywords.splice(index, 1);
    }
  }
}
