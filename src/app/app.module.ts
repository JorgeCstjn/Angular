import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';

import { HeroeComponent } from './Heroes/Heroe/heroe.component';
import { ListadoComponent } from './listado/listado/listado.component';

@NgModule({
  declarations: [
    AppComponent,
    
    HeroeComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent, HeroeComponent, ListadoComponent]
})
export class AppModule { }
