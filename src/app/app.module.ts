import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { KhalyComponent } from './khaly/khaly.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KhalyComponent,
    ContactComponent,
    PortfolioComponent,
    CarouselComponent,
    MentionsLegalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
