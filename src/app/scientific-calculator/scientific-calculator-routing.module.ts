import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScientificCalculatorPage } from './scientific-calculator.page';

const routes: Routes = [
  {
    path: '',
    component: ScientificCalculatorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScientificCalculatorPageRoutingModule {}
