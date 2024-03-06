function rangeExtraction(arrOfNumbers) {
  console.log('arrOfNumbers: ', arrOfNumbers);
  if (arrOfNumbers.length > 2) {
    return createResultFor2OrMoreNums(arrOfNumbers);
  } else {
    return createResultForSmallNums(arrOfNumbers);
  }
}

function createResultFor2OrMoreNums(arrOfNumbers) {
  let resultStr = '';
  for (let i = 0; i < arrOfNumbers.length; i++) {
    // First and last element in the arr
    if (i === 0 || i === arrOfNumbers.length - 1) {
      resultStr += arrOfNumbers[i];
    } else {
      resultStr = createSequence(arrOfNumbers, i, resultStr);
    }
  }
  return resultStr;
}

function createResultForSmallNums(arrOfNumbers) {
  if (arrOfNumbers.length === 1) {
    return arrOfNumbers[0].toString();
  }
  if (arrOfNumbers.length === 2) {
    return arrOfNumbers[0].toString() + ',' + arrOfNumbers[1].toString();
  }
}

function createSequence(arrOfNumbers, i, resultStr) {
  if (arrOfNumbers[i] - 1 === arrOfNumbers[i - 1] && arrOfNumbers[i] + 1 === arrOfNumbers[i + 1]) {
    resultStr = addSequence(resultStr);
  } else {
    resultStr = addNumber(resultStr, i, arrOfNumbers);
  }
  return resultStr;
}

function addSequence(resultStr) {
  if (resultStr[resultStr.length - 1] != '-') {
    if (resultStr[resultStr.length - 1] === ',') {
      resultStr = resultStr.slice(0, -1);
    }
    resultStr += '-';
  }
  return resultStr;
}

function addNumber(resultStr, i, arrOfNumbers) {
  if (i === 1 && resultStr[resultStr.length - 1] != '-') {
    resultStr += ',';
  }
  resultStr += arrOfNumbers[i] + ',';
  return resultStr;
}

module.exports = rangeExtraction;
