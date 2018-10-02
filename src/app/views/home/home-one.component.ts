import { Component, OnInit, OnDestroy } from '@angular/core';
import { LandingFixService } from '../../shared/services/landing-fix.service';

@Component({
  selector: 'app-home-one',
  template: `<app-header></app-header>
  <app-intro></app-intro>
  <app-portfolio></app-portfolio>
  <app-cta></app-cta>
  <app-works></app-works>
  <app-services [backgroundGray]="true"></app-services>
  <app-pricings></app-pricings>
  <app-contact [backgroundGray]="true"></app-contact>
  <app-footer></app-footer>`
})
export class HomeOneComponent implements OnInit, OnDestroy {
  constructor(
    private fix: LandingFixService
  ) { }

  ngOnInit() {
    this.fix.addFix();
  }
  ngOnDestroy() {
    this.fix.removeFix();
  }


}
