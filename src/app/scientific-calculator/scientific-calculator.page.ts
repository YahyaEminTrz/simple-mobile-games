/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scientific-calculator',
  templateUrl: './scientific-calculator.page.html',
  styleUrls: ['./scientific-calculator.page.scss'],
})
export class ScientificCalculatorPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-scientific-calculator',
  templateUrl: './scientific-calculator.page.html',
  styleUrls: ['./scientific-calculator.page.scss'],
})
export class ScientificCalculatorPage {
  display: string = '';
  toggleButtonValue: string = 'calculator'; // Default value for the toggle button
  calculatorType: string = 'normal';

  constructor() {
    window.setTimeout = window.setTimeout;
  }

  inputFontSize: number = 50; // Başlangıç yazı boyutu

  changeInputFontSize(size: number) {
    this.inputFontSize = size;
  }

  clearDisplay() {
    this.display = '';
  }

  calculateResult() {
    try {
      const result = eval(this.display);
      this.display = result.toString();
    } catch (error) {
      this.display = 'Hata';
      setTimeout(() => {
        this.display = '';
      }, 2000); // 2 saniye bekleme süresi
    }
  }

  onDeleteClicked() {
    this.display = this.display.slice(0, -1);
  }

  onToggleButtonClicked() {
    if (this.toggleButtonValue === 'calculator') {
      this.toggleButtonValue = 'scientific';
    } else {
      this.toggleButtonValue = 'calculator';
    }
  }

  onButtonClicked(value: string) {
    if (this.calculatorType === 'normal') {
      this.display += value;
    } else if (this.calculatorType === 'scientific') {
      if (value === '^') {
        if (this.display === '') { // Eğer display boş ise '^' işaretini ekleme
          return;
        } else if (!this.display.endsWith('^')) { // '^' işareti zaten varsa ekleme
          this.display += '^';
        }
      } else {
        this.display += value;
      }
    }
  }
  
  onOperatorClicked(operator: string) {
    // Handle operator clicks based on the selected calculator mode
    if (this.calculatorType === 'normal') {
      this.display += operator;
    } else if (this.calculatorType === 'scientific') {
      this.display += operator;
    }
  }
}




