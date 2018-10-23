import { Component, OnInit, Input } from '@angular/core';
import {DialogComponent} from '../dialog/dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-pricings',
  templateUrl: './pricings.component.html',
  styleUrls: ['./pricings.component.scss']
})
export class PricingsComponent implements OnInit {
  @Input('backgroundGray') public backgroundGray;
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

  openDialog(): void {
    this.dialog.open(DialogComponent, {
      width: '500px',
      height: 'auto'
    });
  }

}
