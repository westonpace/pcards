/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { DeckDemoComponent } from './deck-demo.component';

describe('Component: DeckDemo', () => {
  it('should create an instance', () => {
    let component = new DeckDemoComponent();
    expect(component).toBeTruthy();
  });
});
