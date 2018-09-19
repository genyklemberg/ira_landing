import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-our-story',
  templateUrl: './our-story.component.html',
  styleUrls: ['./our-story.component.scss']
})
export class OurStoryComponent implements OnInit {
  @Input('backgroundGray') public backgroundGray;

  constructor() { }

  ngOnInit() {
  }

}
