import { Component } from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import { NgForm }    from '@angular/common';

import { PlayingCardComponent } from './playing-card';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [PlayingCardComponent],
  providers: [HTTP_PROVIDERS]
})

export class AppComponent {
  selected = false;
  flipped = false;
  possibleRanks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  selectedRank = this.possibleRanks[0];
  possibleSuits = ["spades", "hearts", "diamonds", "clubs"];
  selectedSuit = this.possibleSuits[0];
}
