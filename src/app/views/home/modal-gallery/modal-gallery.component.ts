import { Component, OnInit } from '@angular/core';

import { Gallery, GalleryItem } from 'ng-gallery';

@Component({
  selector: 'app-modal-gallery',
  templateUrl: './modal-gallery.component.html',
  styleUrls: ['./modal-gallery.component.scss']
})
export class ModalGalleryComponent implements OnInit {

  constructor(public gallery: Gallery) {}

  ngOnInit() {
    // const images: GalleryItem[] = [
    //   {
    //     src: '../../../assets/images/cottages/DSC_0046.JPG',
    //     thumbnail: '../../../assets/images/cottages/DSC_0046.JPG',
    //     text: 'Cottage 1'
    //   },
    //   {
    //     src: '../../../assets/images/cottages/DSC_0047.JPG',
    //     thumbnail: '../../../assets/images/cottages/DSC_0047.JPG',
    //     text: 'Cottage 2'
    //   },{
    //     src: '../../../assets/images/cottages/DSC_0048.JPG',
    //     thumbnail: '../../../assets/images/cottages/DSC_0048.JPG',
    //     text: 'Cottage 3'
    //   }
    // ];
    //
    // this.gallery.load(images);
  }
}
