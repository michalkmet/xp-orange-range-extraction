function rangeExtraction(arrOfNumbers) {
  console.log('arrOfNumbers: ', arrOfNumbers);
  let resultStr = '';
  if (arrOfNumbers.length === 1) {
    return arrOfNumbers[0].toString();
  }
  if (arrOfNumbers.length === 2) {
    return arrOfNumbers[0].toString() + ',' + arrOfNumbers[1].toString();
  }
  if (arrOfNumbers.length > 2) {
    for (let i = 0; i < arrOfNumbers.length; i++) {
      // First and last element in the arr
      if (i === 0 || i === arrOfNumbers.length - 1) {
        resultStr += arrOfNumbers[i];
      } else {
        resultStr = createSequence(arrOfNumbers, i, resultStr);
      }
      console.log('resultStr: ', resultStr);
    }
  }
  return resultStr;
}

function createSequence(arrOfNumbers, i, resultStr) {
  console.log('i: ', i);
  console.log('resultStr in the start: ', resultStr);
  console.log('arrOfNumbers[i]: ', arrOfNumbers[i]);
  console.log('arrOfNumbers[i] - 1: ', arrOfNumbers[i] - 1);
  console.log('arrOfNumbers[i - 1]: ', arrOfNumbers[i - 1]);
  console.log('arrOfNumbers[i] + 1: ', arrOfNumbers[i] + 1);
  console.log('arrOfNumbers[i + 1]: ', arrOfNumbers[i + 1]);
  if (arrOfNumbers[i] - 1 === arrOfNumbers[i - 1] && arrOfNumbers[i] + 1 === arrOfNumbers[i + 1]) {
    if (resultStr[resultStr.length - 1] != '-') {
      console.log("resultStr[resultStr.length - 1] != '-'");
      if (resultStr[resultStr.length - 1] === ',') {
        console.log("resultStr[resultStr.length - 1] === ','");
        resultStr = resultStr.slice(0, -1);
        console.log('resultStr slice', resultStr);
      }
      resultStr += '-';
    }
  } else {
    console.log('we are in the else + ,');
    // todo add , if arrOfNumbers[i- 1] + 1 != arrOfNumbers[i]
    // if (arrOfNumbers[i - 1] + 1 != arrOfNumbers[i]) {
    //   resultStr += ',';
    // }
    resultStr += arrOfNumbers[i] + ',';
    // resultStr += arrOfNumbers[i];
  }
  return resultStr;
}

module.exports = rangeExtraction;
