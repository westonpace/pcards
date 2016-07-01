import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { CardPile, CardAddEvent, CardRemoveEvent } from './card-pile';
import { PlayingCard } from './playing-card';

var pile:CardPile;
var cardOne = new PlayingCard("spades", "7", false);
var cardTwo = new PlayingCard("hearts", "4", false);

beforeEach(() => pile = new CardPile());

describe('Model: CardPile', () => {
  it('should intially be empty', () => {
  	expect(pile.cards.length).toEqual(0);
  });
  it('should return empty if empty', () => {
  	expect(pile.empty()).toEqual(true);
  });
  it('should return null last card if empty', () => {
  	expect(pile.getLastCard()).toEqual(null);
  });
  it('should not be empty when adding cards', () => {
  	pile.addCardsToEnd([cardOne, cardTwo]);
  	expect(pile.cards.length).toEqual(2);
  	expect(pile.cards[1]).toEqual(cardTwo);
  });
  it('should return the last card', () => {
  	pile.addCardsToEnd([cardTwo, cardOne]);
  	expect(pile.getLastCard()).toEqual(cardOne);
  });
  it('should not return empty if not empty', () => {
    pile.addCardsToEnd([cardOne]);
    expect(pile.empty()).toEqual(false);
  });
  it('should remove the cards popped', () => {
    pile.addCardsToEnd([cardOne, cardTwo]);
    let cards = pile.popCards();
    expect(cards.length).toEqual(1);
    expect(cards[0]).toEqual(cardTwo);
  });
  it("should allow multiple adds", () => {
  	pile.addCardsToEnd([cardOne]);
  	pile.addCardsToEnd([cardTwo]);
  	expect(pile.cards.length).toEqual(2);
  	expect(pile.cards[1]).toEqual(cardTwo);
  });
  it("should emit an event when cards are added", () => {
  	var events = [];
  	pile.onAdd.subscribe((addEvent:CardAddEvent) => {
  		events.push(addEvent);
  	});
  	pile.addCardsToEnd([cardOne, cardTwo]);
  	expect(events.length).toEqual(1);
  	expect(events[0].start).toEqual(0);
  	expect(events[0].numCards).toEqual(2);
  	expect(events[0].cards.length).toEqual(2);
  	expect(events[0].cards[1]).toEqual(cardTwo);
  });
  it('should be a hot observer', () => {
  	var events = [];
  	pile.addCardsToEnd([cardOne]);  	
  	pile.onAdd.subscribe((addEvent:CardAddEvent) => {
  		events.push(addEvent);
  	});
  	pile.addCardsToEnd([cardTwo]);
  	expect(events.length).toEqual(1);
  	expect(events[0].cards[0]).toEqual(cardTwo);
  });
  it('should allow cards to be popped off', () => {
    pile.addCardsToEnd([cardOne, cardTwo]);
    pile.popCards();
    expect(pile.cards.length).toEqual(1);
    expect(pile.cards[0]).toEqual(cardOne);
    pile.addCardsToEnd([cardTwo]);
    pile.popCards(2);
    expect(pile.cards.length).toEqual(0);
  });
  it('should notify when cards are popped', () => {
    var events = [];
    pile.addCardsToEnd([cardOne, cardTwo]);
    pile.onRemove.subscribe((event:CardRemoveEvent) => {
      events.push(event);
    });
    pile.popCards();
    expect(events.length).toEqual(1);
    expect(events[0].start).toEqual(1);
    expect(events[0].numCards).toEqual(1);
    expect(events[0].cards[0]).toEqual(cardTwo);
  });
  it('should not send add event when cards popped', () => {
    var events = [];
    pile.addCardsToEnd([cardOne, cardTwo]);
    pile.onAdd.subscribe((event:CardAddEvent) => {
      events.push(event);
    });
    pile.popCards();
    expect(events.length).toEqual(0);
  });
});
