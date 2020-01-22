import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { HomePage } from './home.page';
import { HomeDetallePage } from '../home-detalle/home-detalle.page';
import { DestacadosPage } from '../destacados/destacados.page';
import { Home2Page } from '../home2/home2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [
    HomePage,
    HomeDetallePage,
    DestacadosPage,
    Home2Page
  ]
})
export class HomePageModule {}
