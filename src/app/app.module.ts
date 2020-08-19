import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';

@NgModule({
  // Componentes van aquí
  declarations: [
    AppComponent,
    PokemonComponent
  ],
  // Módulos van aquí
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // Servicios van aquí
  providers: [],
  // Componente raíz va aquí
  bootstrap: [AppComponent]
})
export class AppModule { }
