/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arrN = `${n}`.split('');
  const result = [];
  arrN.forEach((y, i) => result.push(+arrN
    .filter((x, index) => (index !== i)).join('')));
  return Math.max(...result);
}

module.exports = deleteDigit;
