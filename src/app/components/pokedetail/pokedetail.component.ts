import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Pokemon} from "../../models/pokemon";

@Component({
  selector: 'app-pokedetail',
  templateUrl: './pokedetail.component.html',
  styleUrls: ['./pokedetail.component.css']
})
export class PokedetailComponent implements OnInit {
  namepoke:string;
  pokemon:Pokemon;
  constructor(private route: ActivatedRoute) {
    sessionStorage.setItem("poke",this.namepoke);
  }

  ngOnInit(): void {
    this.namepoke = this.route.snapshot.paramMap.get("namepoke");
    this.pokemon = new Pokemon(this.namepoke);
  }
}
