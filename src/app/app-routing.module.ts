import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PortraitComponent } from './portrait/portrait.component';
import { FantastiqueComponent } from './fantastique/fantastique.component';
import { KhalyComponent } from './khaly/khaly.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'portrait', component: PortraitComponent },
  { path: 'fantastique', component: FantastiqueComponent },
  { path: 'khaly', component: KhalyComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [
RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', useHash: true })
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
