import { Component, OnInit } from '@angular/core';

import { Gallery } from 'ng-gallery';

@Component({
  selector: 'app-modal-gallery',
  templateUrl: './modal-gallery.component.html',
  styleUrls: ['./modal-gallery.component.scss']
})
export class ModalGalleryComponent implements OnInit {

  constructor(public gallery: Gallery) {

  }

  ngOnInit() {

  }
}
