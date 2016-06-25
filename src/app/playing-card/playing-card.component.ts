import { Component, Input } from '@angular/core';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';

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
  suit: string;
  @Input()
  rank: string;
  @Input()
  selected: boolean;
  @Input()
  flipped: boolean;

  constructor() { }

  getSvgSrc() {
    if (this.suit === 'spades') {
      return 'images/spade.svg';
    } else if (this.suit === 'hearts') {
      return 'images/heart.svg';
    } else if (this.suit === 'clubs') {
      return 'images/club.svg';
    } else if (this.suit === 'diamonds') {
      return 'images/diamond.svg';
    } else {
      console.log('Unknown suit (' + this.suit + ')');
    }
  }


}
