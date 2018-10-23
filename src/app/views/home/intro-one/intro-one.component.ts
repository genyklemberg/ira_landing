import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro-one.component.html',
  styleUrls: ['./intro-one.component.scss']
})
export class IntroOneComponent implements OnInit {

  constructor() { }

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
}
