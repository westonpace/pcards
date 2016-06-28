import { Component, OnInit } from '@angular/core';

import { PlayingCard, PlayingCardComponent } from '../playing-card';
import { DeckComponent } from '../deck';

@Component({
  moduleId: module.id,
  selector: 'app-deck-demo',
  templateUrl: 'deck-demo.component.html',
  styleUrls: ['deck-demo.component.css'],
  directives: [DeckComponent, PlayingCardComponent]
})
export class DeckDemoComponent implements OnInit {

  cards:PlayingCard[];

  constructor() {
  	this.cards = [];
  }

  ngOnInit() {
  	for(var suit of ['hearts', 'diamonds', 'clubs', 'spades']) {
  		for(var rank of ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']) {
  			this.cards.push(new PlayingCard(suit, rank, false))
  		}
  	}
  }

}
