import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit, DoCheck {
  user:string;
  pokedetail:string;

  constructor(private router: Router) {
    this.user="";
    this.pokedetail="";
   }

  ngOnInit(): void {
    if(sessionStorage.getItem("userAuth")){
      this.router.navigate(['/'],{ skipLocationChange: true });
      this.user = sessionStorage.getItem("userAuth");
    } else {
      this.router.navigate(['/login'],{ skipLocationChange: true });
    }
  }

  ngDoCheck(){
    if(sessionStorage.getItem("userAuth")){
      this.user = sessionStorage.getItem("userAuth");
    }
    if(sessionStorage.getItem("poke")){
      this.pokedetail = sessionStorage.getItem("poke");
    }
  }

  logOut(){
    sessionStorage.clear();
    this.user="";
    this.router.navigate(['/login'],{ skipLocationChange: true });
  }

  backPokedex(){
    this.router.navigate(['/'],{ skipLocationChange: true });
    sessionStorage.removeItem("poke");
    this.pokedetail="";
  }

}
