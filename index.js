
module.exports = function(xs) {
  var len = xs.length;
  return len === 0? null : xs[Math.floor(Math.random() * len)];
};
