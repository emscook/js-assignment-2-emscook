"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const chooseRandom = (array = [], numItems = 1) => {
  return array.length <= 1 || numItems < 1 ? array : Array(numItems > array.length || numItems < 0 ? Math.floor(Math.random() * array.length) : numItems).fill().reduce(res => res.concat(Array.apply(null, { length: array.length }).map(Number.call, Number).filter(vally => res.indexOf(vally) < 0)[Math.floor(Math.random() * (array.length - res.length) * 2) % (array.length - res.length)]), []).map(currVal => array[currVal]);
};
exports.chooseRandom = chooseRandom;