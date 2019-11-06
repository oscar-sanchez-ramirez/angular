import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule} from './app-routing.module';
import { NgxSpinnerModule } from "ngx-spinner";

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CaruselComponent } from './carusel/carusel.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { FooterComponent } from './footer/footer.component';
import { RatingModule } from 'ngx-bootstrap/rating';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { ContactoComponent } from './contacto/contacto.component';



const routes: Routes = [
  { path: 'carusel', component: CaruselComponent },
  { path: 'quienes', component: QuienesSomosComponent },
  { path: 'ubicacion', component: UbicacionComponent },
  { path: 'contacto', component: ContactoComponent },
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
    UbicacionComponent,
    ContactoComponent,


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    CarouselModule.forRoot(),
    RatingModule.forRoot(),
    NgxSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
