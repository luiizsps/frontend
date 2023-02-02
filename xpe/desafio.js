function invertWord(word) {
  newWord = "";
  for (var i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
  }
  console.log(newWord);
}
