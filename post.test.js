const chai = require('chai');
const expect = chai.expect;

it('should be 4', () => {
  const four = 2 + 2;
  expect(four).to.equal(4);
});

const shoe = {
    name: "Nike",
    price: 100
};

console.log(shoe.name);

it('Should create a new item with name and price', () => {
    console.log("test");

    expect(shoe.name).to.equal("Nike");
    expect(shoe.price).to.equal(100);
});

it('Should return an array containing all items in cart', () => {
    
});
it('Should add a new item to the shopping cart');
it('Should return the number of items in the cart');
it('Should remove items from cart');
