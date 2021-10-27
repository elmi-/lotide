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

const middle = function(array) {
  const length = array.length;
  const middleIndex = Math.floor(length / 2);

  if (length <= 2) {
    return [];
  } else if (length % 2 !== 0) {
    return array[middleIndex];
  } else {
    return [array[middleIndex - 1], array[middleIndex]];
  }
};

middle([1]); // => []
middle([1, 2]); // => []

middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]
middle([1, 2, 3, 4, 5, 6, 7]); // => [4]
middle(["1", "2", "3", "4", "five", "6", "7", "8", 9]); // => "five"

middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]