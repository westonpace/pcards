import { Component, Input } from '@angular/core';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';

export class PlayingCard {
  suit: string;
  rank: string;
  flipped: boolean;

  constructor(suit:string, rank:string, flipped:boolean) {
    this.suit = suit;
    this.rank = rank;
    this.flipped = flipped;
  }

}

@Component({
  moduleId: module.id,
  selector: 'playing-card',
  templateUrl: 'playing-card.component.html',
  styleUrls: ['playing-card.component.css'],
  directives: [MdIcon],
  viewProviders: [MdIconRegistry]
})
export class PlayingCardComponent {

  @Input()
  card: PlayingCard;
  @Input()
  selected: boolean;

  constructor() { }

  getSvgSrc() {
    if (this.card.suit === 'spades') {
      return 'images/spade.svg';
    } else if (this.card.suit === 'hearts') {
      return 'images/heart.svg';
    } else if (this.card.suit === 'clubs') {
      return 'images/club.svg';
    } else if (this.card.suit === 'diamonds') {
      return 'images/diamond.svg';
    } else {
      console.log('Unknown suit (' + this.card.suit + ')');
    }
  }


}
