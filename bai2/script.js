const input = [60, 40, 55, 75, 64];

function alternatingSums(inputArray) {
  const output = inputArray.reduce((result, value, i) => {
    result[i % 2] += value;
    return result;
  }, [0, 0])
  return output;
}

console.log(alternatingSums(input));