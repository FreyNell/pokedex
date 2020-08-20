import { Component, OnInit } from '@angular/core';
import { Pokemon } from "../../models/pokemon";

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.css']
})
export class PokemonesComponent implements OnInit {
  pokemones:Pokemon[];

  constructor() { 
    this.pokemones = [];
    fetch("https://pokeapi.co/api/v2/pokemon/")
    .then(rta => rta.json())
    .then(json => 
      json.results.forEach((element) => {
        this.pokemones.push(new Pokemon(element));
      }));
  }
  
  ngOnInit(): void {
  }
}
