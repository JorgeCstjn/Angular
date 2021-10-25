import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
import { MainPageComponent } from './dbz/main-page/main-page.component';

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
  
  ],
  providers: [],
  bootstrap: [AppComponent, HeroeComponent, ListadoComponent, MainPageComponent]
})
export class AppModule { }
