const chai = require('chai');
const expect = chai.expect;

it('should be 4', () => {
  const four = 2 + 2;
  expect(four).to.equal(100);
});

it('Should do return the sum of two numbers', () => {
  // Run tests here.

});

it('should be 4', () => {
  const four = 2 + 2;
  if (four !== 40) {
    throw new Error(four + ' should be equal to 2 + 2');
  }
});