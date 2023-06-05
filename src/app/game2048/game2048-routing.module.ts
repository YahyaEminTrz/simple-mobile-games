import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Game2048Page } from './game2048.page';

const routes: Routes = [
  {
    path: '',
    component: Game2048Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Game2048PageRoutingModule {}
