import getId from "../utils/getId";
import CartItem from "./CartItem";

class ShoppingCart {
  static #allCarts = []; //private static arr tied to the class to store all ShoppingCart instances
  #cartItems; //private instance variable to store CartItem objs specific to 'this' shopping cart instance

  constructor() {
    this.id = getId(); //assigning a unique ID to 'this' shopping cart instance using the getId() helper func; if we log the instance's property names, should only get 'id' as it's the only public property in the constructor func
    this.#cartItems = []; //initializing an empty arr to store all of 'this' instance's CartItem objs
    ShoppingCart.#allCarts.push(this); //adding 'this' instance into the class's static arr of all shopping cart instances
  }

  createItem(name, price) {
    const newItem = new CartItem(name, price); //creating a new CartItem instance, an obj with 3 properties (id, name, price). note: first item created will have an id of 2 instead of 1 because getId() counter func will be invoked first by ShoppingCart class's constructor func and then again here by CartItem class's constructor func
    this.#cartItems.push(newItem); //pushing newly created CartItem obj into 'this' instance's cartItems arr
    // console.log('cart items:', this.#cartItems); //returns an arr of objs such as [{id: 2, name: "pineapple", price: 3}]
    return newItem; //returning the new CartItem instance obj
  }

  getItems() {
    return [...this.#cartItems]; //returning a copy of the #cartItems arr to preserve encapsulation, ensuring original private arr can't be mutated
  }

  removeItem(itemID) {
    return this.#cartItems = this.#cartItems.filter((item) => item.id !== itemID); //updating the cartItems arr with a new, copy arr with the desired item obj filtered out
    //alt method:
    // const idx = this.#cartItems.findIndex((item) => item.id === itemID); //same functionality as { id }) => id === itemID
    // this.#cartItems.splice(idx, 1); //removing desired item obj from cartItems arr in place (modifying original arr)
  }

  getTotal() {
    return this.#cartItems.reduce((total, item) => total + item.price, 0); //using reduce to iterate over arr of objs and sum up all the CartItems' price properties, returning the total sum 
  }

  static listAll() {
    return [...ShoppingCart.#allCarts]; //returning a copy of the private static #allCarts arr
  }

  static findBy(cartID) {
    return ShoppingCart.#allCarts.find((cart) => cart.id === cartID); //returning the ShoppingCart instance obj found in #allCarts arr with the matching ID- same functionality as { id }) => id === cartID
  }
};

export default ShoppingCart;