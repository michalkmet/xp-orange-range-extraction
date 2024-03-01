function rangeExtraction(arrOfNumbers) {
  let resultStr = '';
  if (arrOfNumbers.length === 1) {
    return arrOfNumbers[0].toString();
  }
  if (arrOfNumbers.length === 2) {
    return arrOfNumbers[0].toString() + ',' + arrOfNumbers[1].toString();
  }
  if (arrOfNumbers.length > 2) {
    for (let i = 0; i < arrOfNumbers.length; i++) {
      console.log('arrOfNumbers[i]: ', arrOfNumbers[i]);
      console.log('arrOfNumbers[i] - 1: ', arrOfNumbers[i] - 1);
      console.log('arrOfNumbers[i - 1]: ', arrOfNumbers[i - 1]);
      if (i === 0 || i === arrOfNumbers.length - 1) {
        resultStr += arrOfNumbers[i];
      } else {
        if (arrOfNumbers[i] - 1 === arrOfNumbers[i - 1] && arrOfNumbers[i] + 1 === arrOfNumbers[i + 1]) {
          resultStr += '-';
        } else if (arrOfNumbers[i] + 1 != arrOfNumbers[i + 1]) {
          resultStr += arrOfNumbers[i];
        } else {
          resultStr += ',';
        }
      }
    }
  }
  return resultStr;
}

module.exports = rangeExtraction;
