'use strict';

/**
 * @ngdoc directive
 * @name wpPcardsApp.directive:pcard
 * @description
 * # pcard
 */
angular.module('wpPcardsApp')
  .directive('wpPcard', function () {
    return {
      template: '<button class="wp-card"><md-icon md-svg-src="{{getSvgSrc()}}"></md-icon><span>{{rank}}</span></button>',
      scope: {},
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      	if(attrs.hasOwnProperty('suit')) {
      		scope.suit = attrs.suit;
      	} else {
      		scope.suit = 'clubs';
      		console.log('suit undefined');
      	}
      	if(attrs.hasOwnProperty('rank')) {
      		scope.rank = attrs.rank;
      	} else {
      		scope.rank = '2';
      		console.log('rank undefined');
      	}

        scope.getSvgSrc = function() {
          if(scope.suit === 'spades') {
          	  return 'images/spade.svg';
          } else if (scope.suit === 'hearts') {
          	  return 'images/heart.svg';
          } else if (scope.suit === 'clubs') {
          	return 'images/club.svg';
          } else if (scope.suit === 'diamonds') {
          	return 'images/diamond.svg';
          } else {
          	console.log('Unknown suit (' + scope.suit + ')');
          }

        };

        if(scope.suit === 'diamonds' || scope.suit === 'hearts') {
          angular.element(element).addClass('red');
        }

      }
    };
  });
