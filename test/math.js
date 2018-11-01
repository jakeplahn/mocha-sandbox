const assert = require('assert').strict;
const math = require('../js/math');

describe('math', function() {

  describe('heartbeat()', function() {

    it('should return message', function() {
      assert.deepStrictEqual('du-dunk du-dunk', math.heartbeat());
    });

  });

  describe('add1and2()', function() {
    it('should add 1 and 2', function() {
      assert.equal(3, math.add1and2());
    });
  });
});
