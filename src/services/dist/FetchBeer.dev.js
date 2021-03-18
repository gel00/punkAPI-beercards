"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBeer = void 0;

var getBeer = function getBeer(callback, str) {
  var query = str ? "?beer_name=".concat(str) : "";
  fetch('https://api.punkapi.com/v2/beers' + query).then(function (response) {
    return response.json();
  }).then(function (data) {
    return callback(data);
  });
};

exports.getBeer = getBeer;