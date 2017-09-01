import { Component, OnInit } from '@angular/core';
import { Juego} from '../../Clase/juego';


@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {

  miJuego: Juego;
  constructor() {
    this.miJuego = new Juego("Agilidad Aritmética");
   }

  ngOnInit() {
  }

}
