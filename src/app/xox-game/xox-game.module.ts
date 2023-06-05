import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { XoxGamePageRoutingModule } from './xox-game-routing.module';

import { XoxGamePage } from './xox-game.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    XoxGamePageRoutingModule
  ],
  declarations: [XoxGamePage]
})
export class XoxGamePageModule {} 



