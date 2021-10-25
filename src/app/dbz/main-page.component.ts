import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

interface Personaje {
    nombre: string;
    poder: number;
  }


export class MainPageComponent  {

  
  Personaje1: Personaje = {
   nombre: 'Goku',
    poder: 29
}

  Personaje2: Personaje = {
  nombre: 'Pepe',
   poder: 3
}

Personajes: Personaje[] = [this.Personaje1, this.Personaje2]
  
nuevoPersonaje(itemForm: NgForm) {
  let personajeNuevo: Personaje = {
  nombre: itemForm.value.nombre,
  poder: itemForm.value.poder
      };
      this.Personajes.push(personajeNuevo);
    };

    
  }
 
