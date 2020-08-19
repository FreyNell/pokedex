import { Component } from '@angular/core';

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
}
