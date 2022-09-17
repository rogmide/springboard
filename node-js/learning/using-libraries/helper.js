// you have to exports what you need to use in other files at the time of require
// Manually Exports
module.exports = {
  add: add,
  sub: sub,
};

function add(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}
