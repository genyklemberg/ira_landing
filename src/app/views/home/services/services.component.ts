import { Component, OnInit, Input } from '@angular/core';
declare const lightGallery: any;

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  @Input('backgroundGray') public backgroundGray;


  ngOnInit() {
    lightGallery(document.getElementById('lightgallery'));
    const c = lightGallery(document.getElementById('lightgallery'));
    console.log('l: ', lightGallery, c);
  }

}
