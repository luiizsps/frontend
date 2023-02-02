function findNumber(number) {
  list = [1, 2, 3, 5, 8, 13, 21, 34];
  result = false;
  for (var i = 0; i < list.length; i++) {
    if (number === list[i]) {
      result = true;
      break;
    }
  }
  return result;
}
