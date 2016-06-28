"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var icon_1 = require('@angular2-material/icon');
var PlayingCard = (function () {
    function PlayingCard(suit, rank, flipped) {
        this.suit = suit;
        this.rank = rank;
        this.flipped = flipped;
    }
    return PlayingCard;
}());
exports.PlayingCard = PlayingCard;
var PlayingCardComponent = (function () {
    function PlayingCardComponent() {
    }
    PlayingCardComponent.prototype.getSvgSrc = function () {
        if (this.card.suit === 'spades') {
            return 'images/spade.svg';
        }
        else if (this.card.suit === 'hearts') {
            return 'images/heart.svg';
        }
        else if (this.card.suit === 'clubs') {
            return 'images/club.svg';
        }
        else if (this.card.suit === 'diamonds') {
            return 'images/diamond.svg';
        }
        else {
            console.log('Unknown suit (' + this.card.suit + ')');
        }
    };
    __decorate([
        core_1.Input()
    ], PlayingCardComponent.prototype, "card");
    __decorate([
        core_1.Input()
    ], PlayingCardComponent.prototype, "selected");
    PlayingCardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'playing-card',
            templateUrl: 'playing-card.component.html',
            styleUrls: ['playing-card.component.css'],
            directives: [icon_1.MdIcon],
            viewProviders: [icon_1.MdIconRegistry]
        })
    ], PlayingCardComponent);
    return PlayingCardComponent;
}());
exports.PlayingCardComponent = PlayingCardComponent;
