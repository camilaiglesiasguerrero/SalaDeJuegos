import { Component, OnInit } from '@angular/core';
import { Juego} from '../../Clase/juego';

@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.css']
})
export class AdivinaElNumeroComponent implements OnInit {
  
  miJuego: Juego;

  constructor() { 
  this.miJuego = new Juego("Adivina el Número");
  }

  ngOnInit() {
  }
  
}
