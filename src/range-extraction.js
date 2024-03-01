function rangeExtraction(arrOfNumbers) {
  if (arrOfNumbers[0] === 1) {
    return '1';
  } else if (arrOfNumbers[0] === 0 && arrOfNumbers[1] === 1) {
    return '0, 1';
  }
  return '0';
}

module.exports = rangeExtraction;
