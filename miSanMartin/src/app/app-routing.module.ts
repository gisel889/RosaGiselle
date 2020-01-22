import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'historial',
    loadChildren: () => import('./historial/historial.module').then( m => m.HistorialPageModule)
  },
  {
    path: 'intereses',
    loadChildren: () => import('./intereses/intereses.module').then( m => m.InteresesPageModule)
  },  {
    path: 'home-detalle',
    loadChildren: () => import('./home-detalle/home-detalle.module').then( m => m.HomeDetallePageModule)
  },
  {
    path: 'destacados',
    loadChildren: () => import('./destacados/destacados.module').then( m => m.DestacadosPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
