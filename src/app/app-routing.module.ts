import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },  
  { path: 'inicio', loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule) },
  { path: 'encontre',loadChildren: () => import('./pages/encontre/encontre.module').then( m => m.EncontrePageModule) },
  { path: 'buscar', loadChildren: () => import('./pages/buscar/buscar.module').then( m => m.BuscarPageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
