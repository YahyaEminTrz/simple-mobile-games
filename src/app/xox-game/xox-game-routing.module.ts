/*import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { XoxGamePage } from './xox-game.page';

const routes: Routes = [
  {
    path: '',
    component: XoxGamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class XoxGamePageRoutingModule {}  */


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { XoxGamePage } from './xox-game.page';

const routes: Routes = [
  {
    path: '',
    component: XoxGamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class XoxGamePageRoutingModule {}
