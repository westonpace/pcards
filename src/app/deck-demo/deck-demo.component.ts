import { Component, OnInit } from '@angular/core';

import { PlayingCardComponent } from '../playing-card';
import { PlayingCard, CardPile } from '../card-model';
import { DeckComponent } from '../deck';

@Component({
  moduleId: module.id,
  selector: 'app-deck-demo',
  templateUrl: 'deck-demo.component.html',
  styleUrls: ['deck-demo.component.css'],
  directives: [DeckComponent, PlayingCardComponent]
})
export class DeckDemoComponent implements OnInit {

  leftPile:CardPile = new CardPile();
  rightPile:CardPile = new CardPile();
  dealRightEnabled:boolean = true;
  dealLeftEnabled:boolean = true;

  ngOnInit() {
  	for(var suit of ['hearts', 'diamonds', 'clubs', 'spades']) {
  		for(var rank of ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']) {
  			this.leftPile.addCardsToEnd([new PlayingCard(suit, rank, false)]);
  		}
  	}
    this.updateEnabled();
  }

  updateEnabled() {
    this.dealRightEnabled = !this.leftPile.empty();
    this.dealLeftEnabled = !this.rightPile.empty();
  }

  dealCardRight() {
    if(!this.leftPile.empty()) {
      let cards = this.leftPile.popCards();
      this.rightPile.addCardsToEnd(cards);
      this.updateEnabled();
    }
  }

  dealCardLeft() {
    if(!this.rightPile.empty()) {
      let cards = this.rightPile.popCards();
      this.leftPile.addCardsToEnd(cards);
      this.updateEnabled();
    }
  }

}
