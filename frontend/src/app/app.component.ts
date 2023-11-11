import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { ConfigDialogComponent } from './components/config-dialog/config-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'news-cracker';
  initialized = false;

  constructor(public dialog: MatDialog) {
    //
  }

  ngOnInit(): void {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfigDialogComponent, {
      disableClose: true,
      width: '90%',
      height: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.initialized = true;
    });
  }
}
