import { Component, OnInit, Input } from '@angular/core';

import { PlayingCardComponent, PlayingCard } from '../playing-card';

@Component({
	moduleId: module.id,
	selector: 'deck',
	templateUrl: 'deck.component.html',
	styleUrls: ['deck.component.css'],
	directives: [PlayingCardComponent]
})
export class DeckComponent {

	@Input()
	cards:PlayingCard[];
	@Input()
	maxCards:number;

	constructor() {
		this.cards = [];
		this.maxCards = 52;
	}

    empty() : boolean {
    	return this.cards.length == 0;
    }

	getTopCard() : PlayingCard {
		if(this.empty()) {
			return null;
		} else {
			return this.cards[0];
		}
	}

}
