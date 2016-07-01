import { PlayingCard } from './playing-card';
import { Subject } from 'rxjs';

export class CardAddEvent {

	constructor(public start:number, public numCards:number, public cards:Array<PlayingCard>) {

	}

}

export class CardRemoveEvent {

	constructor(public start:number, public numCards:number, public cards:Array<PlayingCard>) {

	}

}

export class CardPile {

    public cards:Array<PlayingCard> = new Array<PlayingCard>();
	public onAdd:Subject<CardAddEvent> = new Subject<CardAddEvent>();
	public onRemove:Subject<CardRemoveEvent> = new Subject<CardRemoveEvent>();

    constructor() {

    }

    addCardsToEnd(cards:Array<PlayingCard>) {
    	var start = this.cards.length;
    	this.cards.push(...cards);
    	this.onAdd.next(new CardAddEvent(start, cards.length, cards));
    }

    getLastCard() {
    	if(this.cards.length > 0) {
    		return this.cards[this.cards.length-1];
    	} else {
    		return null;
    	}
    }

    empty() {
    	return this.cards.length === 0;
    }

    popCards(numCards:number=1) {
        if(numCards > this.cards.length) {
            throw new RangeError("Attempt to remove more cards than are in the pile");
        } else if (numCards <= 0) {
            throw new RangeError("Cannot remove " + numCards + " cards");
        }
        var start = this.cards.length - numCards;
        var removedCards = this.cards.splice(start);
        this.onRemove.next(new CardRemoveEvent(start, numCards, removedCards));
        return removedCards;
    }

}