(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// var apiKey = require('./../.env').apiKey

$(document).ready(function () {
  $('#weatherLocation').click(function () {
    var city = $('#location').val();
    $('#location').val("");
    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function success(response) {
        $('.showHumidity').text('The humidity in ' + city + ' is ' + response.main.humidity + '%');
        $('.showTemp').text('The temperature in Kelvins is ' + response.main.temp + '.');
      },
      error: function error() {
        $('#errors').text("There was an error processing your request. Please try again.");
      }
    });
  });
});

// var apiKey = require('./../env').apiKey

$(document).ready(function () {
  $('#weatherLocation').click(function () {
    var city = $('#location').val();
    $('#location').val("");
    debugger;
    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=e03eef6db6134a4918288c928185455a',
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function success(response) {
        $('.showHumidity').text('The humidity in ' + city + ' is ' + response.main.humidity + '%');
        $('.showTemp').text('The temperature in Kelvins is ' + response.main.temp + '.');
      },
      error: function error() {
        $('#errors').text("There was an error processing your request. Please try again.");
      }
    });
  });
});

},{}]},{},[1]);
