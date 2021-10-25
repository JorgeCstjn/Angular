import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
<<<<<<< HEAD
import { MainPageComponent } from './dbz/main-page/main-page.component';
=======
>>>>>>> e9bd68f80286f1b5950a767b9a4f34410a6478ba

import { HeroeComponent } from './Heroes/Heroe/heroe.component';
import { ListadoComponent } from './listado/listado/listado.component';

@NgModule({
  declarations: [
    AppComponent,
    
    HeroeComponent,
    ListadoComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    ContadorModule
<<<<<<< HEAD
  
  ],
  providers: [],
  bootstrap: [AppComponent, HeroeComponent, ListadoComponent, MainPageComponent]
=======
  ],
  providers: [],
  bootstrap: [AppComponent, HeroeComponent, ListadoComponent]
>>>>>>> e9bd68f80286f1b5950a767b9a4f34410a6478ba
})
export class AppModule { }
