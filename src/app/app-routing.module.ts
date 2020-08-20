import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { PokemonesComponent } from "./components/pokemones/pokemones.component";
import { PokedetailComponent } from "./components/pokedetail/pokedetail.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'detail/:namepoke', component: PokedetailComponent },
  { path: '', component: PokemonesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
