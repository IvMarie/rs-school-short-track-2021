/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const a1 = s1.split('');
  const a2 = s2.split('');
  const result = [];
  a1.forEach((x) => {
    if (a2.includes(x)) {
      result.push(a2.splice(a2.indexOf(x), 1));
    }
  });
  return result.length;
}

module.exports = getCommonCharacterCount;
