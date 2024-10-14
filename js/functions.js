const checkLength = (string, maxLength) => string.length <= maxLength;

function isPalindrome(string) {
  const normalizedString = string.replaceAll(' ','').toLowerCase();
  let newString = '';
  for (let i = normalizedString.length - 1; i >= 0; i--) {
    newString += normalizedString[i];
  }
  return (newString === normalizedString);
}

function getDigitsFromString(string) {
  let digit = '';
  for (let i = 0; i <= String(string).length - 1; i++) {
    const currentSymbol = String(string)[i];
    if (!isNaN(currentSymbol) && currentSymbol !== ' ') {
      digit += currentSymbol;
    }
  }
  return digit.length === 0 ? NaN : digit;
}
