function rangeExtraction(arrOfNumbers) {
  if (arrOfNumbers.length === 1) {
    return arrOfNumbers[0].toString();
  }
  if (arrOfNumbers.length === 2) {
    return arrOfNumbers[0].toString() + ',' + arrOfNumbers[1].toString();
  }
}

module.exports = rangeExtraction;
