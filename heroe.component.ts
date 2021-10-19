import { Component } from '@angular/core';

@Component({
  selector: 'hereo-component',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {
  nombre: string = 'Jorge';
  edad: number = 0;

    nombreEdad(){
        return 'Su nombre es '+this.nombre+' y tiene '+ this.edad + ' años.';
    }
    nombreMayus(){
        return 'Su nombre en mayúsculaes es '+this.nombre.toUpperCase()+'.';
    }
    cambiarNombre(){
        this.nombre = 'Jorgito';
    }
    cambiarEdad(){
        this.edad = 30;
    }
      

}

