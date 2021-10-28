const eqArrays = function(arr1, arr2) {
  let outcome;
  if (arr1.length === arr2.length) {
    let arrayLength = arr2.length;
    for (let i = 0; i < arrayLength; i++) {
      if (arr1[i] === arr2[i]) {
        outcome = true;
      } else {
        outcome = false;
      }
    }
  } else {
    outcome = false;
  }
  return outcome;
};

/*
Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.
*/

const assertArraysEqual = function(outcome) {
  if (outcome) {
    console.log(`✅ Assertion Passed: eqArrays function returns ${outcome}`);
  } else {
    console.log(`❌ Assertion Failed: eqArrays function returns ${outcome}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  console.log(results);
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);