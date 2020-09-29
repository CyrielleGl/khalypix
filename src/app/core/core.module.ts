import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    SharedModule,
    RouterModule
  ]
})
export class CoreModule { }
