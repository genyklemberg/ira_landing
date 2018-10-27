import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Gallery, GalleryItem} from 'ng-gallery';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ServicesComponent implements OnInit {
  @Input('backgroundGray') public backgroundGray;
  images: GalleryItem[] = [
    {
      src: './assets/images/0051.jpg',
      thumbnail: './assets/images/0051.jpg'
    },
    {
      src: './assets/images/0046.jpg',
      thumbnail: './assets/images/0046.jpg'
    },
    {
      src: './assets/images/0065.jpg',
      thumbnail: './assets/images/0065.jpg'
    },
    {
      src: './assets/images/0067.jpg',
      thumbnail: './assets/images/0067.jpg'
    },
    {
      src: './assets/images/0072.jpg',
      thumbnail: './assets/images/0072.jpg'
    },
    {
      src: './assets/images/0074.jpg',
      thumbnail: './assets/images/0074.jpg'
    },
    {
      src: './assets/images/0083.jpg',
      thumbnail: './assets/images/0083.jpg'
    },
    {
      src: './assets/images/0074.jpg',
      thumbnail: './assets/images/0074.jpg'
    },
    {
      src: './assets/images/0108.jpg',
      thumbnail: './assets/images/0108.jpg'
    },
    {
      src: './assets/images/0124.jpg',
      thumbnail: './assets/images/0124.jpg'
    },
    {
      src: './assets/images/0132.jpg',
      thumbnail: './assets/images/0132.jpg'
    },
    {
      src: './assets/images/0148.jpg',
      thumbnail: './assets/images/0148.jpg'
    },
    {
      src: './assets/images/0123.jpg',
      thumbnail: './assets/images/0123.jpg'
    },
    {
      src: './assets/images/0139.jpg',
      thumbnail: './assets/images/0139.jpg'
    }
  ];

  constructor(public gallery: Gallery) { }

  ngOnInit() {
    this.gallery.load(this.images);
  }

  openGallery() {
    this.gallery.open();
  }

}
