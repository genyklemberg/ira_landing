import { Component, OnInit, Input } from '@angular/core';
import { Gallery, GalleryItem } from 'ng-gallery';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  @Input('backgroundGray') public backgroundGray;

  constructor(public gallery: Gallery) { }

  ngOnInit() {}

}
