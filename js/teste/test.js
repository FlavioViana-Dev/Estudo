board = [
  [42, 51, 22, 10, 0],
  [2, 50, 7, 6, 15],
  [4, 36, 8, 30, 20],
  [0, 40, 10, 100, 1],
];

board = [
  [42, 5],
  [3, 2],
];

const lastPositionX = board[board.length - 1].length - 1;
const lastPositionY = board.length - 1;

console.log(navigate(board, 0, 0, lastPositionY, lastPositionX, 0, "first"));

function navigate(board, y, x, lastPositionY, lastPositionX, a, lado) {
  value = board[y][x];
  board[y][x] *= -1;
  pos = [-1, -1, 1, 1];

  if (y == lastPositionY && x == lastPositionX) {
    return [value];
  } else {
    console.log(lado, "x", x, "y", y);
    const left = x - 1;
    const right = x + 1;
    const top = y - 1;
    const bottom = y + 1;

    const navLeft = left >= 0 && board[y][left] != undefined;
    const navRight = right <= lastPositionX && board[y][right] != undefined;
    const navTop = top >= 0 && board[top][x] != undefined;
    const navBotom = bottom <= lastPositionY && board[bottom][x] != undefined;

    let arr;
    if (navLeft) arr = [value, ...navigate(board, y, left, lastPositionY, lastPositionX, a + 1, "left")];
    else if (navRight) arr = [value, ...navigate(board, y, right, lastPositionY, lastPositionX, a + 1, "right")];
    else if (navTop) arr = [value, ...navigate(board, top, x, lastPositionY, lastPositionX, a + 1, "top")];
    else if (navBotom) arr = [value, ...navigate(board, bottom, x, lastPositionY, lastPositionX, a + 1, "bottom")];

    return arr;
  }
}

function navigate2(board, x, y, lastPositionX, lastPositionY) {
  //console.log(y, x, board, board[y][x]);
  let value = board[y][x];
  board[y][x] = undefined;

  if (x == lastPositionX && y == lastPositionY) {
    const path = [value];
    return path;
  } else {
    let leftx = x - 1;
    const pathLeft = left(board, x - 1, y, lastPositionX, lastPositionY);
    if (pathLeft.length > 0) pathLeft.push(value);
    console.log("navigate2", x, pathLeft);
    let rightx = x + 1;
    console.log("navigate3", x);
    const pathRight = right(board, x + 1, y, lastPositionX, lastPositionY);
    if (pathRight.length > 0) pathRight.push(value);
    console.log("navigate4", x, pathRight);

    // const pathTop = top(board, x, y - 1, lastPositionX, lastPositionY);
    // if (pathTop.length > 0) pathTop.push(value);

    // const pathBottom = bottom(board, x, y + 1, lastPositionX, lastPositionY);
    // if (pathBottom.length > 0) pathBottom.push(value);

    // costLeft = pathLeft.length > 0 ? pathLeft.reduce((previousValue, currentValue) => previousValue + currentValue, 0) : undefined;
    //costRight = pathRight.length > 0 ? pathRight.reduce((previousValue, currentValue) => previousValue + currentValue, 0) : undefined;
    // costTop = pathTop.length > 0 ? pathTop.reduce((previousValue, currentValue) => previousValue + currentValue, 0) : undefined;
    // costBottom = pathBottom.length > 0 ? pathBottom.reduce((previousValue, currentValue) => previousValue + currentValue, 0) : undefined;

    // costLeft = trataCost(costLeft);
    //costRight = trataCost(costRight);
    // costTop = trataCost(costTop);
    // costBottom = trataCost(costBottom);

    //minCost = Math.min(44444444444444444444, costRight); //, costTop, costBottom);

    // if (minCost == costLeft) return pathLeft;
    //if (minCost == costRight) return pathRight;
    // if (minCost == costTop) return pathTop;
    // if (minCost == costBottom) return pathBottom;

    return -1;
  }
}

function trataCost(cost) {
  return isNaN(cost) ? 100000000 : cost;
}

function left(board, x, y, lastPositionX, lastPositionY) {
  if (x >= 0) {
    return navigate(board, x, y, lastPositionX, lastPositionY);
  } else return [];
}

function right(board, x, y, lastPositionX, lastPositionY) {
  // console.log("x", x, "lastPositionX", lastPositionX);
  if (x <= lastPositionX) return navigate(board, x, y, lastPositionX, lastPositionY);
  else return [];
}

function top(board, x, y, lastPositionX, lastPositionY) {
  if (y >= 0) return navigate(board, x, y, lastPositionX, lastPositionY);
  else return [];
}

function bottom(board, x, y, lastPositionX, lastPositionY) {
  if (y <= lastPositionY) return navigate(board, x, y, lastPositionX, lastPositionY);
  else return [];
}
