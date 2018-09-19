import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  MatSnackBarModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NguCarouselModule } from '@ngu/carousel';
// import { CommonDirectivesModule } from '../../directives/common/common-directives.module';
import { SharedModule } from '../../shared/shared.module';

import {HttpClientModule} from '@angular/common/http';
import {StoryComponent} from './story.component';
import {StoryRoutes} from './story.routing';
import {WINDOW_PROVIDERS} from '../../shared/helpers/window.helper';
import {OurStoryComponent} from './works/our-story.component';
import {HeadComponent} from './head/head.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
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
    FlexLayoutModule,
    NguCarouselModule,
    HttpClientModule,
    RouterModule.forChild(StoryRoutes)
  ],
  declarations: [
    StoryComponent,
    OurStoryComponent,
    HeadComponent
  ],
  providers: [WINDOW_PROVIDERS]

})
export class StoryModule { }
