import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { CardPile } from './card-pile';

var pile:CardPile;

beforeEach(() => pile = new CardPile([]));

describe('Model: CardPile', () => {
  it('should intially be empty', () => {
  	expect(pile.cards.length).toEqual(0);
  	expect(false).toEqual(true);
  });
});
