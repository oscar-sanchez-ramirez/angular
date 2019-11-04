import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CaruselComponent } from './carusel/carusel.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';

const routes: Routes = [
  { path: 'quienes', component: QuienesSomosComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CaruselComponent,
    QuienesSomosComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    CarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
