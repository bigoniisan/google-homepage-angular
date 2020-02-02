import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageComponent } from './homepage.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';

import { BodyModule } from './body/body.module';
import { FooterModule } from './footer/footer.module';
import { NavigationBarModule } from './navigation-bar/navigation-bar.module';

@NgModule({
  declarations: [
    HomepageComponent,
    NavigationBarComponent, 
    BodyComponent, 
    FooterComponent
  ],
  imports: [
    CommonModule,
    BodyModule,
    FooterModule,
    NavigationBarModule
  ],
  exports: [
    HomepageComponent
  ]
})
export class HomepageModule { }
