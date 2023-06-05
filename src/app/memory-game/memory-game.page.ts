
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memory-game',
  templateUrl: './memory-game.page.html',
  styleUrls: ['./memory-game.page.scss'],
})
export class MemoryGamePage implements OnInit {
  cards: any[];
  flippedCards: any[];
  matchedCards: any[];
  rows: any[];
  gameStarted: boolean;
  gameEnded: boolean;
  remainingAttempts: number;
  showDuration: number;

  constructor() {
    this.cards = [
      { id: 1, image: '/assets/icon/memory-game1.ET.png', flipped: false, matched: false },
      { id: 2, image: '/assets/icon/memory-game1.KABAK.png', flipped: false, matched: false },
      { id: 3, image: '/assets/icon/memory-game1.KASE.png', flipped: false, matched: false },
      { id: 4, image: '/assets/icon/memory-game1.KIZILDERELI.png', flipped: false, matched: false },
      { id: 5, image: '/assets/icon/memory-game1.KOZALAK.png', flipped: false, matched: false },
      { id: 6, image: '/assets/icon/memory-game1.PASTA.png', flipped: false, matched: false },
      { id: 7, image: '/assets/icon/memory-game1.TART.png', flipped: false, matched: false },
      { id: 8, image: '/assets/icon/memory-game1.SAPKA.png', flipped: false, matched: false },
      { id: 1, image: '/assets/icon/memory-game1.ET.png', flipped: false, matched: false },
      { id: 2, image: '/assets/icon/memory-game1.KABAK.png', flipped: false, matched: false },
      { id: 3, image: '/assets/icon/memory-game1.KASE.png', flipped: false, matched: false },
      { id: 4, image: '/assets/icon/memory-game1.KIZILDERELI.png', flipped: false, matched: false },
      { id: 5, image: '/assets/icon/memory-game1.KOZALAK.png', flipped: false, matched: false },
      { id: 6, image: '/assets/icon/memory-game1.PASTA.png', flipped: false, matched: false },
      { id: 7, image: '/assets/icon/memory-game1.TART.png', flipped: false, matched: false },
      { id: 8, image: '/assets/icon/memory-game1.SAPKA.png', flipped: false, matched: false },
    ];
    this.flippedCards = [];
    this.matchedCards = [];
    this.rows = [];
    this.gameStarted = false;
    this.gameEnded = false;
    this.remainingAttempts = 3;
    this.showDuration = 4000;
  }

  ngOnInit() {
    this.showFrontFaces();
    this.resetGame();
  }

  showFrontFaces() {
    for (const card of this.cards) {
      card.flipped = true;
    }
  }

  flipCard(card: any) {
    if (this.gameStarted && !this.gameEnded && !card.flipped && this.flippedCards.length < 2) {
      card.flipped = true;
      this.flippedCards.push(card);
  
      if (this.flippedCards.length === 2) {
        setTimeout(() => {
          this.checkForMatch();
        }, 1000);
      } else if (this.flippedCards.length === 1) {
        setTimeout(() => {
          card.flipped = false;
        }, 4000); 
      }
    }
  }
  

  checkForMatch() {
    const card1 = this.flippedCards[0];
    const card2 = this.flippedCards[1];

    if (card1.id == card2.id) {
      card1.matched = true;
      card2.matched = true;
      this.matchedCards.push(card1, card2);
      this.checkForGameEnd();
    } else {
      card1.flipped = false;
      card2.flipped = false;
      this.remainingAttempts--;

      if (this.remainingAttempts === 0) {
        this.gameEnded = true;
      }
    }

    this.flippedCards = [];
  }

  checkForGameEnd() {
    if (this.matchedCards.length === this.cards.length) {
      this.gameEnded = true;
    }
  }

  resetGame() {
    this.shuffleCards();
    this.arrangeCards();
    this.matchedCards = [];
    this.flippedCards = [];
    this.gameStarted = false;
    this.gameEnded = false;
    this.remainingAttempts = 3;

    for (const card of this.cards) {
      card.flipped = false;
      card.matched = false;
    }
  
    this.showFrontFaces(); 
    setTimeout(() => {
      this.hideCards();
      this.gameStarted = true; 
    }, this.showDuration);

    
  }
  
  hideCards() {
    for (const card of this.cards) {
      card.flipped = false;
    }
  }


  shuffleCards() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  arrangeCards() {
    const numberOfColumns = 4;
    const numberOfRows = Math.ceil(this.cards.length / numberOfColumns);

    let index = 0;
    this.rows = [];

    for (let i = 0; i < numberOfRows; i++) {
      const row = [];
      for (let j = 0; j < numberOfColumns; j++) {
        if (index < this.cards.length) {
          row.push(this.cards[index]);
          index++;
        }
      }
      this.rows.push(row);
    }
  }

  
  
}  