import { Component, OnInit } from '@angular/core';
import { NgForm }    from '@angular/common';

import { PlayingCardComponent, PlayingCard } from '../playing-card';

@Component({
  moduleId: module.id,
  selector: 'app-card-demo',
  templateUrl: 'card-demo.component.html',
  styleUrls: ['card-demo.component.css'],
  directives: [PlayingCardComponent]
})
export class CardDemoComponent {

  selected = false;
  possibleRanks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  possibleSuits = ["spades", "hearts", "diamonds", "clubs"];
  card = new PlayingCard(this.possibleSuits[0], this.possibleRanks[0], false);

}
