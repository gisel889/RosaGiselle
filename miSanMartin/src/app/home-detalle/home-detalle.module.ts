import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeDetallePageRoutingModule } from './home-detalle-routing.module';

import { HomeDetallePage } from './home-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeDetallePageRoutingModule
  ],
  declarations: [HomeDetallePage]
})
export class HomeDetallePageModule {}
