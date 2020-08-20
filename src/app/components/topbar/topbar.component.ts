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
      this.router.navigateByUrl("/");
      this.user = sessionStorage.getItem("userAuth");
    } else {
      this.router.navigateByUrl("/login");
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
    this.router.navigateByUrl("/login");
  }

  backPokedex(){
    this.router.navigateByUrl("/");
    sessionStorage.removeItem("poke");
    this.pokedetail="";
  }

}
