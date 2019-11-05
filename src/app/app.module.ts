import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CaruselComponent } from './carusel/carusel.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { FooterComponent } from './footer/footer.component';
import { RatingModule } from 'ngx-bootstrap/rating';

const routes: Routes = [
  { path: 'carusel', component: CaruselComponent },
  { path: 'quienes', component: QuienesSomosComponent },
  { path: '',component: CaruselComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },



];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CaruselComponent,
    QuienesSomosComponent,
    FooterComponent,
  

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    CarouselModule.forRoot(),
    RatingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
