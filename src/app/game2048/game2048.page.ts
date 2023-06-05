import { Component, OnInit, HostListener } from '@angular/core';

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

interface Tile {
  value: number;
}

@Component({
  selector: 'app-game2048',
  templateUrl: './game2048.page.html',
  styleUrls: ['./game2048.page.scss'],
})
export class Game2048Page implements OnInit {
  tiles: Array<Array<Tile | null>> = [];
  score: number = 0;
  gameOver: boolean = false;

  constructor() {}

  ngOnInit() {
    this.initializeGame();
  }

  initializeGame() {
    this.tiles = Array(4)
      .fill(null)
      .map(() => Array(4).fill(null));
    this.score = 0;
    this.gameOver = false;

    this.addRandomTile();
    this.addRandomTile();
  }

  addRandomTile() {
    const emptyTiles: { row: number; col: number }[] = [];

    for (let row = 0; row < this.tiles.length; row++) {
      for (let col = 0; col < this.tiles[row].length; col++) {
        if (this.tiles[row][col] === null) {
          emptyTiles.push({ row, col });
        }
      }
    }

    if (emptyTiles.length > 0) {
      const randomIndex = Math.floor(Math.random() * emptyTiles.length);
      const { row, col } = emptyTiles[randomIndex];
      this.tiles[row][col] = { value: Math.random() < 0.9 ? 2 : 4 };
    }
  }

  move(direction: Direction) {
    if (this.gameOver) {
      return;
    }

    let moved = false;
    const oldTiles = JSON.parse(JSON.stringify(this.tiles));

    switch (direction) {
      case Direction.Up:
        moved = this.moveUp();
        break;
      case Direction.Down:
        moved = this.moveDown();
        break;
      case Direction.Left:
        moved = this.moveLeft();
        break;
      case Direction.Right:
        moved = this.moveRight();
        break;
    }

    if (moved) {
      this.addRandomTile();
      this.checkGameOver();
    }

    if (!this.isBoardChanged(oldTiles, this.tiles)) {
      // No move was made
      return;
    }
  }

  resetGame() {
    this.score = 0;
    this.gameOver = false;
    this.addRandomTile();
    this.initializeGame();
  }

  moveUp(): boolean {
    let moved = false;

    for (let col = 0; col < this.tiles[0].length; col++) {
      for (let row = 1; row < this.tiles.length; row++) {
        if (this.tiles[row][col] === null) {
          continue;
        }

        let newRow = row - 1;
        while (newRow >= 0 && this.tiles[newRow][col] === null) {
          this.tiles[newRow][col] = this.tiles[newRow + 1][col];
          this.tiles[newRow + 1][col] = null;
          newRow--;
          moved = true;
        }

        if (
          newRow >= 0 &&
          this.tiles[newRow][col]?.value === this.tiles[newRow + 1][col]?.value
        ) {
          this.tiles[newRow][col]!.value *= 2;
          this.score += this.tiles[newRow][col]!.value;
          this.tiles[newRow + 1][col] = null;
          moved = true;
        }
      }
    }

    return moved;
  }

  moveDown(): boolean {
    let moved = false;

    for (let col = 0; col < this.tiles[0].length; col++) {
      for (let row = this.tiles.length - 2; row >= 0; row--) {
        if (this.tiles[row][col] === null) {
          continue;
        }

        let newRow = row + 1;
        while (newRow < this.tiles.length && this.tiles[newRow][col] === null) {
          this.tiles[newRow][col] = this.tiles[newRow - 1][col];
          this.tiles[newRow - 1][col] = null;
          newRow++;
          moved = true;
        }

        if (
          newRow < this.tiles.length &&
          this.tiles[newRow][col]?.value === this.tiles[newRow - 1][col]?.value
        ) {
          this.tiles[newRow][col]!.value *= 2;
          this.score += this.tiles[newRow][col]!.value;
          this.tiles[newRow - 1][col] = null;
          moved = true;
        }
      }
    }

    return moved;
  }

  moveLeft(): boolean {
    let moved = false;

    for (let row = 0; row < this.tiles.length; row++) {
      for (let col = 1; col < this.tiles[row].length; col++) {
        if (this.tiles[row][col] === null) {
          continue;
        }

        let newCol = col - 1;
        while (newCol >= 0 && this.tiles[row][newCol] === null) {
          this.tiles[row][newCol] = this.tiles[row][newCol + 1];
          this.tiles[row][newCol + 1] = null;
          newCol--;
          moved = true;
        }

        if (
          newCol >= 0 &&
          this.tiles[row][newCol]?.value === this.tiles[row][newCol + 1]?.value
        ) {
          this.tiles[row][newCol]!.value *= 2;
          this.score += this.tiles[row][newCol]!.value;
          this.tiles[row][newCol + 1] = null;
          moved = true;
        }
      }
    }

    return moved;
  }

  moveRight(): boolean {
    let moved = false;

    for (let row = 0; row < this.tiles.length; row++) {
      for (let col = this.tiles[row].length - 2; col >= 0; col--) {
        if (this.tiles[row][col] === null) {
          continue;
        }

        let newCol = col + 1;
        while (
          newCol < this.tiles[row].length &&
          this.tiles[row][newCol] === null
        ) {
          this.tiles[row][newCol] = this.tiles[row][newCol - 1];
          this.tiles[row][newCol - 1] = null;
          newCol++;
          moved = true;
        }

        if (
          newCol < this.tiles[row].length &&
          this.tiles[row][newCol]?.value === this.tiles[row][newCol - 1]?.value
        ) {
          this.tiles[row][newCol]!.value *= 2;
          this.score += this.tiles[row][newCol]!.value;
          this.tiles[row][newCol - 1] = null;
          moved = true;
        }
      }
    }

    return moved;
  }

  checkGameOver() {
    const movesAvailable = this.isMoveAvailable();

    if (!movesAvailable) {
      this.gameOver = true;
    }
  }

  isMoveAvailable(): boolean {
    for (let row = 0; row < this.tiles.length; row++) {
      for (let col = 0; col < this.tiles[row].length; col++) {
        if (this.tiles[row][col] === null) {
          return true;
        }

        if (
          row > 0 &&
          this.tiles[row][col]?.value === this.tiles[row - 1][col]?.value
        ) {
          return true;
        }

        if (
          row < this.tiles.length - 1 &&
          this.tiles[row][col]?.value === this.tiles[row + 1][col]?.value
        ) {
          return true;
        }

        if (
          col > 0 &&
          this.tiles[row][col]?.value === this.tiles[row][col - 1]?.value
        ) {
          return true;
        }

        if (
          col < this.tiles[row].length - 1 &&
          this.tiles[row][col]?.value === this.tiles[row][col + 1]?.value
        ) {
          return true;
        }
      }
    }

    return false;
  }

  isBoardChanged(
    oldBoard: Array<Array<Tile | null>>,
    newBoard: Array<Array<Tile | null>>
  ): boolean {
    for (let row = 0; row < oldBoard.length; row++) {
      for (let col = 0; col < oldBoard[row].length; col++) {
        if (oldBoard[row][col]?.value !== newBoard[row][col]?.value) {
          return true;
        }
      }
    }

    return false;
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowUp') {
      this.move(Direction.Up);
    } else if (event.key === 'ArrowDown') {
      this.move(Direction.Down);
    } else if (event.key === 'ArrowLeft') {
      this.move(Direction.Left);
    } else if (event.key === 'ArrowRight') {
      this.move(Direction.Right);
    }
  }

  @HostListener('document:click', ['$event'])   //şuan çalışmıyor
  handleMouseClick(event: MouseEvent) {
    const startX = event.clientX;
    const startY = event.clientY;
    const threshold = 3; 
  
    
    if (event.clientX - startX > threshold) {
      this.move(Direction.Right);
    } else if (startX - event.clientX > threshold) {
      this.move(Direction.Left);
    }
  
    
    if (event.clientY - startY > threshold) {
      this.move(Direction.Down);
    } else if (startY - event.clientY > threshold) {
      this.move(Direction.Up);
    }
  }
}
