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

const hat = {
    name: "Kangol",
    price: 45
};

const belt = {
    name: "Hermes",
    price: 500
};

const cart = {
    items: [shoe, hat],
    totalPrice: shoe.price + hat.price
}

console.log(shoe.name);

it('Should create a new item with name and price', () => {
    console.log("test");

    expect(shoe.name).to.equal("Nike");
    expect(shoe.price).to.equal(100);
});

it('Should return an array containing all items in cart', () => {
    // return cart.items
    expect(cart.items.length).to.equal(2);
});
it('Should add a new item to the shopping cart', () => {
    cart.items.push(belt);
    expect(cart.items.length).to.equal(3);
});

it('Should return the number of items in the cart', () => {
    
});
it('Should remove items from cart');
