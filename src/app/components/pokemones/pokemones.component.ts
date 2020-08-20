import { Component, OnInit } from '@angular/core';
import { Pokemon } from "../../models/pokemon";

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.css']
})
export class PokemonesComponent implements OnInit {
  pokemones:Pokemon[];
  visibles:Pokemon[];
  search:string;

  constructor() { 
    this.pokemones = [];
    this.visibles =[];
    fetch("https://pokeapi.co/api/v2/pokemon/")
    .then(rta => rta.json())
    .then(json => {
      json.results.forEach((element) => {
        this.pokemones.push(new Pokemon(element));
      });
      this.visibles = this.pokemones;
    });
  }
  
  ngOnInit(): void {
  }

  namePoke(event: KeyboardEvent): void {
    this.search = (event.target as HTMLInputElement).value;
    let re = new RegExp(this.search,'i');
    this.visibles = this.pokemones.filter(poke => re.test(poke.name));
  }

}
