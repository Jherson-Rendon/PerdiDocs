import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EncontrePage } from './encontre.page';

const routes: Routes = [
  {
    path: '',
    component: EncontrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EncontrePageRoutingModule {}
