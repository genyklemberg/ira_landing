import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {DialogComponent} from '../dialog/dialog.component';

@Component({
  selector: 'app-intro',
  templateUrl: './intro-one.component.html',
  styleUrls: ['./intro-one.component.scss']
})
export class IntroOneComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    // const promise = document.querySelector('video').play();
    //
    // if (promise !== undefined) {
    //   promise.then(_ => {
    //     // Autoplay started!
    //     const btn = document.getElementById('unmuteButton');
    //     btn.style.display = 'none';
    //   }).catch(error => {
    //     // Autoplay was prevented.
    //     document.querySelector('#unmuteButton').addEventListener('click', function() {
    //       document.querySelector('video').play();
    //     });
    //   });
    // }
  }

  openDialog(): void {
    this.dialog.open(DialogComponent, {
      width: '500px',
      height: 'auto'
    });
  }

}
