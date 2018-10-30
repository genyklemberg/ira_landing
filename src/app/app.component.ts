import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {

  constructor(private meta: Meta,
              private title: Title) {
    title.setTitle('котеджі на Куликівській - коли все поруч');
    meta.addTags([
      { name: 'author',   content: 'kulikivska.lviv.ua'},
      { name: 'type', content: 'website'},
      { name: 'description', content: 'Котеджі на Куликівській - 6 спарених просторих котеджів в парковому районі Львова від забудовника. Ми створили для вас затишний комплекс в одному з найближчих до центру спальних районів. Сучасне оформлення, сертифіковані матеріали будівництва, закрита територія та розвинена інфраструктура - створять для вас справжній сімейний затишок.' },
      { name: 'image', content: 'https://kulikivska.lviv.ua/assets/images/new/DSC_0055.jpg' },
      { name: 'og:author',   content: 'kulikivska.lviv.ua'},
      { name: 'og:type', content: 'website'},
      { name: 'og:description', content: 'Котеджі на Куликівській - 6 спарених просторих котеджів в парковому районі Львова від забудовника. Ми створили для вас затишний комплекс в одному з найближчих до центру спальних районів. Сучасне оформлення, сертифіковані матеріали будівництва, закрита територія та розвинена інфраструктура - створять для вас справжній сімейний затишок.' },
      { name: 'og:image', content: 'https://kulikivska.lviv.ua/assets/images/new/DSC_0055.jpg' }
    ]);
  }

  ngOnInit() {
    
  }
  
}
