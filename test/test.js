
var test = require('tap').test;
var pickrand = require('..');

var sample = function(xs, n, sampler){
  sampler = sampler || pickrand;
  var ds = {};
  for(var i = 0; i < n; ++i) {
    var x = sampler(xs);
    ds[x] = (ds[x] || 0) + 1;
  }

  for (var d in ds) {
    ds[d] = (ds[d] / n) * 100;
  }
  return ds;
};

test('does it work', function(t){
  t.plan(3);

  t.equal(pickrand([]), null);
  t.equal(pickrand([1]), 1);

  var ones = sample([1,2,3], 1000000)[1];
  t.equal(Math.floor(ones) === 33, true, "drawing from 3 should be rougly equal to 33%: " + ones);

});

