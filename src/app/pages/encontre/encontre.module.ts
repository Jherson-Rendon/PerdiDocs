import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EncontrePageRoutingModule } from './encontre-routing.module';

import { EncontrePage } from './encontre.page';
import { BuscarPageModule } from '../buscar/buscar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EncontrePageRoutingModule,
    
  ],
  declarations: [EncontrePage]
})
export class EncontrePageModule {}
