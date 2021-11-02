// index.js
const head   = require('./head');
const middle = require('./middle');
const tail   = require('./tail');
const eqArrays   = require('./eqArrays');
const assertEqual = require('./assertEqual')
const assertsArraysEqual = require('./assertsArraysEqual');


module.exports = {
  head:   head,
  middle: middle,
  tail:   tail,
  eqArrays: eqArrays,
  assertEqual: assertEqual,
  assertsArraysEqual: assertsArraysEqual
};