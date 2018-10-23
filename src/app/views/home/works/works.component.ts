import { Component, OnInit, Input } from '@angular/core';
import {MatDialog} from '@angular/material';
import {DialogComponent} from '../dialog/dialog.component';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  @Input('backgroundGray') public backgroundGray;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {}

  openDialog(): void {
    this.dialog.open(DialogComponent, {
      width: '500px',
      height: 'auto'
    });
  }

}
