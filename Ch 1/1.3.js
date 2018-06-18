const URLify = (str) => {
  let words = str.split(' ');
  words.filter(word => word.length > 0);
  return words.join('%20');
};