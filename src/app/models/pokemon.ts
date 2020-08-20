export class Pokemon {
  id:number;
  name:string;
  img:string;
  type:string[];
  height:number;
  weight:number;
  skills:string[];

  constructor(poke:Poke) {
    this.name = poke.name;
    fetch(poke.url).then(rta=>rta.json()).then(rta => {
      this.type = rta.types.map(type => type.type.name);
      this.img = "https://pokeres.bastionbot.org/images/pokemon/"+rta.id+".png";
      this.skills = rta.abilities.map(abi => abi.ability.name);
    }); 
  }
}

interface Poke {
  name:string,
  url:string
}