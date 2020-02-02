import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoComponent } from './logo/logo.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchButtonsComponent } from './search-buttons/search-buttons.component';



@NgModule({
  declarations: [LogoComponent, SearchBarComponent, SearchButtonsComponent],
  imports: [
    CommonModule
  ]
})
export class BodyModule { }
