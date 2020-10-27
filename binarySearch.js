"use strict";

const binarySearch = (arr, element) => {
  let startInd = 0;

  let endInd = arr.length - 1;

  let result;

  while (startInd <= endInd) {
    let midInd = Math.floor((startInd + endInd) / 2);

    if (element === arr[midInd]) {
      result = midInd;

      break;
    } else if (element > arr[midInd]) {
      startInd = midInd + 1;
    } else {
      endInd = midInd - 1;
    }
  }

  return result;
};
