export class PokemonAPI {
    count:number;
    next:string;
    previous:string;
    results:Poke[];
}

interface Poke{
    name:string;
    url:string;
}