import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Superman', 'Batman', 'Ironman'];
  borrado: string = "";
  seleccionar: string = "";


  borrarHeroe(){
    if(this.heroes.length == 0){
      this.borrado = '';
    } else{
      this.borrado = this.heroes[0];
      this.heroes.splice(0, 1);
    }
    
  }
  seleccionHeroe(heroe: string) {
    this.seleccionar = heroe;
  }
  
}

 
