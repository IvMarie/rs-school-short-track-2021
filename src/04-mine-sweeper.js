/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(m) {
  const result = m;
  for (let x = 0; x < m.length; x++) {
    for (let y = 0; y < m.length; y++) {
      let count = 0;
      if (m[x][y] === false) {
        if (m[x][y - 1] !== undefined && m[x][y - 1] === true) { count += 1; }
        if (m[x][y + 1] !== undefined && m[x][y + 1] === true) { count += 1; }
        if (m[x - 1] !== undefined) {
          if (m[x - 1][y - 1] !== undefined && m[x - 1][y - 1] === true) { count += 1; }
          if (m[x - 1][y] !== undefined && m[x - 1][y] === true) { count += 1; }
          if (m[x - 1][y + 1] !== undefined && m[x - 1][y + 1] === true) { count += 1; }
        }
        if (m[x + 1] !== undefined) {
          if (m[x + 1][y - 1] !== undefined && m[x + 1][y - 1] === true) { count += 1; }
          if (m[x + 1][y] !== undefined && m[x + 1][y] === true) { count += 1; }
          if (m[x + 1][y + 1] !== undefined && m[x + 1][y + 1] === true) { count += 1; }
        }
        result[x][y] = count;
      }
    }
  }
  return result.map((x) => x.map((y) => (y === true ? 1 : y)));
}

module.exports = minesweeper;
