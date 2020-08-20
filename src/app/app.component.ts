import { Component } from '@angular/core';
import { Router } from '@angular/router';

/**
 *  selector: es donde se pinta el elemento.
 *  templateUrl: la plantilla html que utilizará el elemento.
 *  styleUrls: estilos que utilizará el elemento.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Las vairables que puedo usar en el template html
export class AppComponent {
  title = 'pokedex';

  constructor(private router: Router){
    if(localStorage.getItem("userAuth")){
      this.router.navigateByUrl("/");
    } else {
      this.router.navigateByUrl("/login");
    }
  }
}
