/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { PlayingCardComponent } from './playing-card.component';

describe('Component: PlayingCard', () => {
  it('should create an instance', () => {
    let component = new PlayingCardComponent();
    expect(component).toBeTruthy();
  });
});
