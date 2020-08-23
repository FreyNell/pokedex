import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {PokemonAPI} from "../models/pokemonAPI";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class PokemonesService {
  pokeUrl:string = "https://pokeapi.co/api/v2/pokemon";
  pokeLimit = "?limit=50";
  constructor(private http:HttpClient) {}

  // Obtener
  getPokes():Observable<PokemonAPI>{
    return this.http.get<PokemonAPI>(`${this.pokeUrl}${this.pokeLimit}`);
  }
}
