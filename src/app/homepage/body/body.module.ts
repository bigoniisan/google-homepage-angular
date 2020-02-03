import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoComponent } from './logo/logo.component';
import { SearchBarComponent } from './search-bar/search-bar.component';


@NgModule({
  declarations: [
    LogoComponent, 
    SearchBarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LogoComponent,
    SearchBarComponent
  ]
})
export class BodyModule { }
