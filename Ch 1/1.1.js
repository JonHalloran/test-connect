const isUnique = (str) => {
  const letters = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (letters[char]) {
      return false;
    }
    letters[char] = true;
  }

  return true;
};

export default isUnique;