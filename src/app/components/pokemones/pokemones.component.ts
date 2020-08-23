import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  { PokemonesService } from "../../services/pokemones.service";
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

  constructor(private router: Router, private pokeService: PokemonesService) { 
    this.pokemones = [];
    this.visibles =[];
  }
  
  ngOnInit(): void {
    this.pokeService.getPokes().subscribe(poke => {
      this.pokemones = poke.results.map(e => new Pokemon(e.name));
      this.visibles = this.pokemones;
    });
  }

  namePoke(event: KeyboardEvent): void {
    this.search = (event.target as HTMLInputElement).value;
    let re = new RegExp(this.search,'i');
    this.visibles = this.pokemones.filter(poke => re.test(poke.name));
  }

  goDetail(e){
    if(e.target.dataset.namepoke){
      this.router.navigate(['/detail/'+e.target.dataset.namepoke],{ skipLocationChange: true });
    }
  }

}
