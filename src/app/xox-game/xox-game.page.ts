/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xox-game',
  templateUrl: './xox-game.page.html',
  styleUrls: ['./xox-game.page.scss'],
})
export class XoxGamePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

} */
/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-xox-game',
  templateUrl: './xox-game.page.html',
  styleUrls: ['./xox-game.page.scss'],
})
export class XoxGamePage {
  cells: string[][] = [['', '', ''], ['', '', ''], ['', '', '']];
  currentPlayer: string = 'X';
  gameEnded: boolean = false;
  resultMessage: string = '';

  cellClicked(row: number, col: number) {
    if (!this.gameEnded && this.cells[row][col] === '') {
      this.cells[row][col] = this.currentPlayer;
      if (this.checkWin()) {
        this.resultMessage = `Oyuncu ${this.currentPlayer} Kazandı!`;
        this.gameEnded = true;
      } else if (this.checkDraw()) {
        this.resultMessage = 'Berabere!';
        this.gameEnded = true;
      } else {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  }

  checkWin(): boolean {
    const patterns = [
      // Rows
      [[0, 0], [0, 1], [0, 2]],
      [[1, 0], [1, 1], [1, 2]],
      [[2, 0], [2, 1], [2, 2]],
      // Columns
      [[0, 0], [1, 0], [2, 0]],
      [[0, 1], [1, 1], [2, 1]],
      [[0, 2], [1, 2], [2, 2]],
      // Diagonals
      [[0, 0], [1, 1], [2, 2]],
      [[0, 2], [1, 1], [2, 0]],
    ];

    for (const pattern of patterns) {
      const [a, b, c] = pattern;
      if (
        this.cells[a[0]][a[1]] === this.cells[b[0]][b[1]] &&
        this.cells[b[0]][b[1]] === this.cells[c[0]][c[1]] &&
        this.cells[a[0]][a[1]] !== ''
      ) {
        return true;
      }
    }

    return false;
  }

  checkDraw(): boolean {
    for (const row of this.cells) {
      for (const cell of row) {
        if (cell === '') {
          return false;
        }
      }
    }

    return true;
  }

  resetGame() {
    this.cells = [['', '', ''], ['', '', ''], ['', '', '']];
    this.currentPlayer = 'X';
    this.gameEnded = false;
    this.resultMessage = '';
  }
}
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-xox-game',
  templateUrl: './xox-game.page.html',
  styleUrls: ['./xox-game.page.scss'],
})
export class XoxGamePage {
  cells: string[][] = [['', '', ''], ['', '', ''], ['', '', '']];
  currentPlayer: string = 'X';
  gameEnded: boolean = false;
  resultMessage: string = '';

  cellClicked(row: number, col: number) {
    if (!this.gameEnded && this.cells[row][col] === '') {
      this.cells[row][col] = this.currentPlayer;
      if (this.checkWin()) {
        this.resultMessage = `Oyuncu ${this.currentPlayer} Kazandı!`;
        this.gameEnded = true;
      } else if (this.checkDraw()) {
        this.resultMessage = 'Berabere!';
        this.gameEnded = true;
      } else {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  }

  checkWin(): boolean {
    const patterns = [
      // Rows
      [[0, 0], [0, 1], [0, 2]],
      [[1, 0], [1, 1], [1, 2]],
      [[2, 0], [2, 1], [2, 2]],
      // Columns
      [[0, 0], [1, 0], [2, 0]],
      [[0, 1], [1, 1], [2, 1]],
      [[0, 2], [1, 2], [2, 2]],
      // Diagonals
      [[0, 0], [1, 1], [2, 2]],
      [[0, 2], [1, 1], [2, 0]],
    ];

    for (const pattern of patterns) {
      const [a, b, c] = pattern;
      if (
        this.cells[a[0]][a[1]] === this.cells[b[0]][b[1]] &&
        this.cells[b[0]][b[1]] === this.cells[c[0]][c[1]] &&
        this.cells[a[0]][a[1]] !== ''
      ) {
        return true;
      }
    }

    return false;
  }

  checkDraw(): boolean {
    for (const row of this.cells) {
      for (const cell of row) {
        if (cell === '') {
          return false;
        }
      }
    }

    return true;
  }

  resetGame() {
    this.cells = [['', '', ''], ['', '', ''], ['', '', '']];
    this.currentPlayer = 'X';
    this.gameEnded = false;
    this.resultMessage = '';
  }
}