const input = [2, 3, -5, -2, 4];

function adjacentElementsProduct(inputArray) {
  let output = 0;
  for (var i = 0; i < inputArray.length - 1; i++) {
    const mul = inputArray[i] * inputArray[i + 1];
    if (mul > output) output = mul;
  };
  return output;
}

console.log(adjacentElementsProduct(input));