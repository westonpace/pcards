import { Component, OnInit, Input } from '@angular/core';

import { PlayingCardComponent } from '../playing-card';
import { PlayingCard, CardPile, CardAddEvent, CardRemoveEvent } from '../card-model';

@Component({
	moduleId: module.id,
	selector: 'deck',
	templateUrl: 'deck.component.html',
	styleUrls: ['deck.component.css'],
	directives: [PlayingCardComponent]
})
export class DeckComponent implements OnInit {

	@Input()
	pile:CardPile;
	@Input()
	maxCards:number = 52;

	displayCards: Array<PlayingCard> = [null, null, null];
	topcardIndex = 0;
	undercardIndex = 1;
	offstageIndex = 2;
	offstageTransition = false;
	topcardTransition = false;

	getCard(index:number) {
		if(index == this.topcardIndex && this.displayCards[index] === null && this.pile !== null) {
			this.displayCards[index] = this.pile.getLastCard();
		}
		return this.displayCards[index];
	}

	getClassesForCard(index:number) {
		if(this.pile.empty()) {
			return ['empty'];
		}
		if(index == this.topcardIndex) {
			if(this.topcardTransition) {
				return ['topcard-transition'];
			} else {
				return ['topcard-instant'];
			}
		} else if (index == this.undercardIndex) {
			return ['undercard'];
		} else if (index == this.offstageIndex) {
			if(this.offstageTransition) {
				return ['offstage-transition'];
			} else {
				return ['offstage-instant'];
			}
		}
	}

	dealCard() {
		var topcardIndexCopy = this.topcardIndex;
		var offstageIndexCopy = this.offstageIndex;
		this.setOffstage(topcardIndexCopy, true);
		this.setTopcard(offstageIndexCopy, false);
		this.displayCards[offstageIndexCopy] = this.pile.getLastCard();
	}

	receiveCard() {
		var topcardIndexCopy = this.topcardIndex;
		var offstageIndexCopy = this.offstageIndex;
		var undercardIndexCopy = this.undercardIndex;
		this.setOffstage(undercardIndexCopy, false);
		this.setTopcard(offstageIndexCopy, true);
		this.setUndercard(topcardIndexCopy)
		this.displayCards[offstageIndexCopy] = this.pile.getLastCard();
	}

	setUndercard(newIndex:number) {
		this.undercardIndex = newIndex;
	}

	setOffstage(newIndex:number, transition:boolean) {
		this.offstageIndex = newIndex;
		this.offstageTransition = transition;
	}

	setTopcard(newIndex:number, transition:boolean) {
		this.topcardIndex = newIndex;
		this.topcardTransition = transition;
	}

	cardsAdded(event:CardAddEvent) {
		this.receiveCard();
	}

	cardsRemoved(event:CardRemoveEvent) {
		this.dealCard();
	}

	fill() {
		return this.pile.cards.length / this.maxCards;
	}

	ngOnInit() {
		this.pile.onAdd.subscribe((event) => this.cardsAdded(event));
		this.pile.onRemove.subscribe((event) => this.cardsRemoved(event));
	}

}
