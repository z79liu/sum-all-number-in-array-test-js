const chai = require('chai');
const expect = chai.expect;

const sumItems = require('./index');

describe('sum', function() {
  it('should sum from a to b', () => {
    expect(sumItems([[1, 2, [[3], 4]], 5, []])).to.equal(15);
    expect(sumItems([1, 2, 3, 4, 5])).to.equal(15);
  });
});