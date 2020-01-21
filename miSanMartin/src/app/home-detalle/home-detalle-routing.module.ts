import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeDetallePage } from './home-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: HomeDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeDetallePageRoutingModule {}
