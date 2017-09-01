import { Component, OnInit } from '@angular/core';
import { Agilidad} from '../../Clase/agilidad';


@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {

  miJuego: Agilidad;
  constructor() {
    
   }

  ngOnInit() {
  }

}
