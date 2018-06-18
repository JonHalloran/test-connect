const checkPermut = (str1, str2) => {
  const str1Letters = {};

  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];
    if (str1Letters[char]) {
      str1Letters[char]++;
    } else {
      str1Letters[char] = 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    const char = str2[i];
    if (str1Letters[char]) {
      str1Letters[char]--;
    } else {
      return false;
    }
  }

  return true;
};

export default checkPermut;