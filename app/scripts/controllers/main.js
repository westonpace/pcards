'use strict';

/**
 * @ngdoc function
 * @name wpPcardsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wpPcardsApp
 */
angular.module('wpPcardsApp')
  .controller('MainCtrl', function () {
  	this.selected1 = false;
  	this.selected2 = false;
  	this.selected3 = false;
  	this.selected4 = false;

  	this.click1 = function() {
  		this.selected1 = !this.selected1;
  	};
  	this.click2 = function() {
  		this.selected2 = !this.selected2;
  	};
  	this.click3 = function() {
  		this.selected3 = !this.selected3;
  	};
  	this.click4 = function() {
  		this.selected4 = !this.selected4;
  	};
  });
