import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PokemonesComponent } from './components/pokemones/pokemones.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  // Componentes van aquí
  declarations: [
    AppComponent,
    LoginComponent,
    PokemonesComponent,
    RegisterComponent
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
