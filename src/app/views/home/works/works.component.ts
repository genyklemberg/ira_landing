import { Component, OnInit, Input } from '@angular/core';
import { Gallery, GalleryItem } from 'ng-gallery';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  @Input('backgroundGray') public backgroundGray;

  items = [
    {path: '../../../../assets/images/0046.jpg'},
    {path: '../../../../assets/images/0051.jpg'},
    {path: '../../../../assets/images/0062.jpg'}
  ];

  constructor(public gallery: Gallery) { }

  ngOnInit() {
    const images: GalleryItem[] = [
      {
        src: '../../../../assets/images/0046.jpg',
        thumbnail: '../../../../assets/images/0046.jpg',
        text: 'Sky & Clouds'
      },
      {
        src: '../../../../assets/images/0051.jpg',
        thumbnail: '../../../../assets/images/0051.jpg',
        text: 'Sky & Clouds'
      },
      {
        src: '../../../../assets/images/0062.jpg',
        thumbnail: '../../../../assets/images/0072.jpg',
        text: 'Sky & Clouds'
      }
    ];

    this.gallery.load(images);
  }

}
