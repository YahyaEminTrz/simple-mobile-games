import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScientificCalculatorPageRoutingModule } from './scientific-calculator-routing.module';

import { ScientificCalculatorPage } from './scientific-calculator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScientificCalculatorPageRoutingModule
  ],
  declarations: [ScientificCalculatorPage]
})
export class ScientificCalculatorPageModule {}
