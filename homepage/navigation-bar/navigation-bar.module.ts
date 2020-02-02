import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeftSideComponent } from './left-side/left-side.component';
import { RightSideComponent } from './right-side/right-side.component';


@NgModule({
  declarations: [
    LeftSideComponent,
    RightSideComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NavigationBarModule { }
