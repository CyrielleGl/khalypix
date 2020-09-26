import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { KhalyComponent } from './khaly/khaly.component';
import { ContactComponent } from './contact/contact.component';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'khaly', component: KhalyComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'mentions-legales', component: MentionsLegalesComponent }
];

@NgModule({
  imports: [
  RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', useHash: true })
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
