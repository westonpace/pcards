"use strict";
var rxjs_1 = require('rxjs');
var CardAddEvent = (function () {
    function CardAddEvent(start, numCards, cards) {
        this.start = start;
        this.numCards = numCards;
        this.cards = cards;
    }
    return CardAddEvent;
}());
exports.CardAddEvent = CardAddEvent;
var CardRemoveEvent = (function () {
    function CardRemoveEvent(start, numCards, cards) {
        this.start = start;
        this.numCards = numCards;
        this.cards = cards;
    }
    return CardRemoveEvent;
}());
exports.CardRemoveEvent = CardRemoveEvent;
var CardPile = (function () {
    function CardPile(cards) {
        this.cards = cards;
        this.onAdd = new rxjs_1.Subject();
        this.onRemove = new rxjs_1.Subject();
    }
    CardPile.prototype.addCardsToEnd = function (cards) {
        var start = this.cards.length;
        this.cards.concat(cards);
        this.onAdd.
        ;
    };
    return CardPile;
}());
exports.CardPile = CardPile;
