import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DestacadosPageRoutingModule } from './destacados-routing.module';

import { DestacadosPage } from './destacados.page';
import { HomeDetallePage } from '../home-detalle/home-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DestacadosPageRoutingModule
  ],
  declarations: [
    DestacadosPage,
    HomeDetallePage
  ]
})
export class DestacadosPageModule {}
