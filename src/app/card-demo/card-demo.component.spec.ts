/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { CardDemoComponent } from './card-demo.component';

describe('Component: CardDemo', () => {
  it('should create an instance', () => {
    let component = new CardDemoComponent();
    expect(component).toBeTruthy();
  });
});
