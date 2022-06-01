function firstRecurringChar(input) {

  var obj = {};

  for (var i = 0; i < input.length; i++) {
    if (obj[input[i]]) {
      return input[i];
    } else {
      obj[input[i]] = true;
    }
  }
  return undefined;
}

firstRecurringChar([2, 3, 3, 1, 5, 2]);