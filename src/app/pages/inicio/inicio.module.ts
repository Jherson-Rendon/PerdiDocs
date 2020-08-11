import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';

import { InicioPage } from './inicio.page';
import { HttpClientModule } from '@angular/common/http';
import { TareasService } from '../../services/tareas.service';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule,
    // HttpClientModule
  ],
  declarations: [InicioPage]
})
export class InicioPageModule {


  constructor(  ){
  }
  
  // getDatos(){
  //   this.tareasService.getDato().subscribe( todos => {console.log(todos);
  //   });
  // }

  

}
