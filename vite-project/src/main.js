import './style.css'
import { renderInventory, renderCart } from './utils/render-functions';
import ShoppingCart from './model/ShoppingCart';

const main = () => {
  const myCart = new ShoppingCart();
  // console.log('init: my cart', myCart); //debugging; logs ShoppingCart{ id: 1, #cartItems: []}
  // console.log('init: my cart properties', Object.getOwnPropertyNames(myCart)); //debugging; logs ['id']

  document.querySelector("#inventory-list").addEventListener('click', (e) => {
    const { name, price } = e.target.closest('.item-card').dataset; //getting the dataset of the closest .item-card clicked
    // console.log('target:', e.target); //to help me visualize
    // console.log('.item-card closest to target e:', e.target.closest('.item-card'), 'its dataset:', e.target.closest('.item-card').dataset);
    myCart.createItem(name, Number(price)); //adding item clicked to the shopping cart instance by invoking class method createItem() passing in item dataset values as args

    renderCart(myCart); //updating cart div with the cart item shopped
  });

  document.querySelector("#cart-list").addEventListener('click', (e) => {
    const { cartItemId } = e.target.closest('li').dataset;
    myCart.removeItem(Number(cartItemId)); //invoking removeItem() on clicked cart item

    renderCart(myCart); //rendering updated cart with item removed
  });

  renderInventory();
}

main();