export class Pokemon {
  id:number;
  name:string;
  img:string;
  type:string[];
  height:number;
  weight:number;
  skills:string[];

  constructor(poke:string) {
    fetch("https://pokeapi.co/api/v2/pokemon/"+poke)
    .then(rta=>rta.json()).then(rta => {
      this.name = rta.name;
      this.type = rta.types.map(type => type.type.name );
      this.img = rta.sprites.front_default;
      this.skills = rta.abilities.map(abi => abi.ability.name);
      this.height = rta.height;
      this.weight = rta.weight
      this.id=rta.id;
    }); 
  }
}