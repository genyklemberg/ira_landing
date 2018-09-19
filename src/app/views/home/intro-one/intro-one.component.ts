import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro-one.component.html',
  styleUrls: ['./intro-one.component.scss']
})
export class IntroOneComponent implements OnInit {
  status = 'Mute';

  constructor() { }

  ngOnInit() {
  }

  pauseAudio() {
    const video = document.getElementById('myVideo') as HTMLMediaElement;

    if (video.muted) {
      video.muted = false;
      this.status = 'Mute';
    } else {
      video.muted = true;
      this.status = 'Unmute';
    }
  }
}
