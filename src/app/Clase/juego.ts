export class Juego {
    nombre : string;
    numeroSecreto: number;
    Gano: boolean;
    Jugador: string;
    numeroIngresado: number;

constructor(elJuego: string) { 
  this.nombre = elJuego;
  }

public GenerarNuevo():void{
  this.numeroSecreto = Math.floor(Math.random()*100+1);
  console.info("Numero: ", this.numeroSecreto);
  }
}
