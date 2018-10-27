import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  MatIconModule,
  MatCardModule,
  MatMenuModule,
  MatButtonModule,
  MatChipsModule,
  MatListModule,
  MatInputModule,
  MatRippleModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatDialogModule
 } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
// import { NguCarouselModule } from '@ngu/carousel';
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutes } from './home.routing';

import { HomeOneComponent } from './home-one.component';
import { IntroOneComponent } from './intro-one/intro-one.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';
import { CtaComponent } from './cta/cta.component';
import { PricingsComponent } from './pricings/pricings.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

import { WINDOW_PROVIDERS } from '../../shared/helpers/window.helper';
import {WorksComponent} from './works/works.component';
// import {HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './header/header.component';
import { GalleryModule } from 'ng-gallery';
import { DialogComponent } from './dialog/dialog.component';
import { DialogViewComponent } from './dialog/dialog-view.component';


@NgModule({
  imports: [
    CommonModule,
    // FormsModule,
    SharedModule,
    // ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatChipsModule,
    MatInputModule,
    MatListModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatDialogModule,
    FlexLayoutModule,
    // NguCarouselModule,
    // HttpClientModule,
    RouterModule.forChild(HomeRoutes),
    GalleryModule.forRoot({
      style: {
        'width': '900px',
        'height': '500px',
        'background': '#245E45'
      },
      'player': {
        'autoplay': true,
        'interval': 3000,
        'progress': false,
        'position': 'bottom'
      },
      'lightbox': {
        'backdropClass': 'g-backdrop',
        'panelClass': 'dialog-overlay',
        'hasBackdrop': true
      },
      'imageSize': 'contain',
      'className': 'fluid'
    })
  ],
  declarations: [
    HomeOneComponent,
    HeaderComponent,
    IntroOneComponent,
    PortfolioComponent,
    ServicesComponent,
    CtaComponent,
    PricingsComponent,
    ContactComponent,
    FooterComponent,
    WorksComponent,
    DialogComponent,
    DialogViewComponent
  ],
  entryComponents: [
    DialogComponent,
    DialogViewComponent
  ],
  providers: [WINDOW_PROVIDERS]

})
export class HomeModule { }
