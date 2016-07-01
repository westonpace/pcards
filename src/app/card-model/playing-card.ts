export class PlayingCard {
  suit: string;
  rank: string;
  flipped: boolean;

  constructor(suit:string, rank:string, flipped:boolean) {
    this.suit = suit;
    this.rank = rank;
    this.flipped = flipped;
  }

  toString() {
  	var result = this.rank + " of " + this.suit;
  	if(this.flipped) {
  		result += " <flipped>";
  	}
  	return result;
  }

}
