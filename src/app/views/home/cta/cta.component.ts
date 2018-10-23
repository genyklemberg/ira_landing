import { Component, OnInit } from '@angular/core';
import {DialogComponent} from '../dialog/dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss']
})
export class CtaComponent implements OnInit {

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
