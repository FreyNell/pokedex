import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PokemonesComponent } from './components/pokemones/pokemones.component';
import { RegisterComponent } from './components/register/register.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { PokedetailComponent } from './components/pokedetail/pokedetail.component';

@NgModule({
  // Componentes van aquí
  declarations: [
    AppComponent,
    LoginComponent,
    PokemonesComponent,
    RegisterComponent,
    TopbarComponent,
    PokedetailComponent
  ],
  // Módulos van aquí
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  // Servicios van aquí
  providers: [],
  // Componente raíz va aquí
  bootstrap: [AppComponent]
})
export class AppModule { }
