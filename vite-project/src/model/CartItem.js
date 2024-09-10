//Lesson 5.1.0 Assignment: Has Many/Belongs To by Eileen

import getId from "../utils/getId";

//QUESTION 1: create a class with 3 properties --> 1) id: a unique value generated from the getId helper func, 2) name: the given name of the item, and 3) price: the given price of the item
class CartItem {
  constructor(name, price) {
    this.id = getId();
    this.name = name;
    this.price = price;
  }
};

export default CartItem;