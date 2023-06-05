import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnaSayfaPage } from './ana-sayfa.page';

const routes: Routes = [
  {
    path: '',
    component: AnaSayfaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnaSayfaPageRoutingModule {} 


