"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBeer = void 0;

var getBeer = function getBeer(callback, obj) {
  var name = obj.name,
      alc = obj.alc,
      color = obj.color;
  name = name ? "beer_name=".concat(name) : "";
  alc = alc ? "abv_lt=".concat(alc) : "";
  color = color ? "ebc_lt=".concat(color) : "";
  var qArr = [name, alc, color];
  var query = qArr.filter(function (filter) {
    return filter;
  }).join("&");
  query = query ? "?" + query : "";
  fetch('https://api.punkapi.com/v2/beers' + query).then(function (response) {
    return response.json();
  }).then(function (data) {
    return callback(data);
  });
};

exports.getBeer = getBeer;