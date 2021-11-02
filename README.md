# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @appleselmi/lotide`

**Require it:**

`const _ = require('@appleselmi/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
* `assertArraysEqual`: function that asserts if two arrays are equals
* `assertEqual`: function that asserts if two values are equals
* `eqArrays`: function that compares two arrays
* `head`: function that retrieves the first element from the array
* `middle`: function that returns the middle element of an array
* `tail`: function that retrieves every element except the head (first element) of the array