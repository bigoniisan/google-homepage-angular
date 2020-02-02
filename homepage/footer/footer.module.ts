import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationComponent } from './location/location.component';
import { OtherLinksComponent } from './other-links/other-links.component';

@NgModule({
  declarations: [
    LocationComponent,
    OtherLinksComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FooterModule { }
