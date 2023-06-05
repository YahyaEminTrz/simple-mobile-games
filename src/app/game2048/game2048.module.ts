import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Game2048PageRoutingModule } from './game2048-routing.module';

import { Game2048Page } from './game2048.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Game2048PageRoutingModule
  ],
  declarations: [Game2048Page]
})
export class Game2048PageModule {}
