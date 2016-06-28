import { PlayingCard } from '../playing-card';
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

	public onAdd:Subject<CardAddEvent> = new Subject<CardAddEvent>();
	public onRemove:Subject<CardRemoveEvent> = new Subject<CardRemoveEvent>();

    constructor(public cards:PlayingCard[]) {

    }

    addCardsToEnd(cards:Array<PlayingCard>) {
    	var start = this.cards.length;
    	this.cards.concat(cards);
    	this.onAdd.next(new CardAddEvent(start, cards.length, cards));
    }

}