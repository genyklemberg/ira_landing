import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  @Input('backgroundGray') public backgroundGray;

  constructor() { }

  ngOnInit() {
  }

}
