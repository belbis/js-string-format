
// standard imports
var assert = require("assert");

// local imports
String.prototype.format = require("../");

describe("unit tests for string format", function() {
  // comparison for all tests
  var cmp = "The quick brown fox jumped over the lazy dog.";
  
  it('with string args', function() {
    var s = "The {0} {1} {2} jumped over the {3} {4}.";
    var ret = s.format("quick", "brown", "fox", "lazy", "dog");
    assert.equal(ret, cmp);
  });
  
  it('with array args', function() {
    var s = "The {0} {1} {2} jumped over the {3} {4}.";
    var args = ["quick", "brown", "fox", "lazy", "dog"];
    assert.equal(s.format(args), cmp);
  });
  
  it('with obj args and numerical indices', function() {
    var s = "The {0} {1} fox jumped over the {2} dog.";
    var args = {
      0: "quick",
      1: "brown",
      2: "lazy"
    };
    assert.equal(s.format(args), cmp);
  });
  
  it('with obj args and named indices', function() {
    var s = "The {foxAdj0} {foxAdj1} fox jumped over the {dogAdj0} dog.";
    var args = {
      foxAdj0: "quick",
      foxAdj1: "brown",
      dogAdj0: "lazy"
    };
    assert.equal(s.format(args), cmp);
  });
  
  it('with args too long for format string', function() {
    var s = "The {0} {1} fox jumped over the {2} dog.";
    var args = ["quick", "brown", "lazy", "oops"];
    assert.equal(s.format(args), cmp);
  });
});
