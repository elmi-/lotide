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

const assertArraysEqual = function(outcome) {
  if (outcome) {
    console.log(`✅ Assertion Passed: eqArrays function returns ${outcome}`);
  } else {
    console.log(`❌ Assertion Failed: eqArrays function returns ${outcome}`);
  }
};

/*
Create a function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
*/

const flatten = function(array) {
  let flattenedArray = [];
  for (const element of array) {
    if (typeof element === "object") {
      for (const nestedElement of element) {
        flattenedArray.push(nestedElement);
      }
    } else {
      flattenedArray.push(element);
    }
  }

  console.log(flattenedArray);
};

flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]
flatten([1 , 2, [6], 4, 5, [3, 4]]) // => [1, 2, 6, 4, 5, 3, 4]