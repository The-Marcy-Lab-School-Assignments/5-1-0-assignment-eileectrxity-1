import { items } from './items.json'

export const renderInventory = () => {
  const inventoryEl = document.querySelector('#inventory-list');
  items.forEach((item) => { //iterating over the global json 'items' obj + creating a card div for each el
    const itemCard = document.createElement('div');
    itemCard.className = 'item-card';
    itemCard.dataset.name = item.item_name;
    itemCard.dataset.price = item.price;
    itemCard.innerHTML = `
      <img alt=${item.item_name} src=${item.img_url}>
      <p>${item.item_name}: $${item.price}</p>
      <button>Add To Cart</button>
    `
    inventoryEl.append(itemCard);
  });
};

export const renderCart = (myCart) => {
  // console.log('my shopping cart rendered:', myCart); //visualizing
  const cartTotal = myCart.getTotal();
  const cartItems = myCart.getItems();
  // console.log('cartTotal:', cartTotal, 'cartItems:', cartItems); //visualizing

  // update the cart total
  document.querySelector("#cart-total").textContent = `Total: $${cartTotal}`;

  // empty cart
  const cartList = document.querySelector("#cart-list");
  cartList.innerHTML = ''; //clearing the cart ul so that only the any previously rendered items are not created + rendered again in the iteration below

  // and re-render the cart
  cartItems.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} $${item.price}`;
    li.dataset.cartItemId = item.id;
    cartList.append(li);
  });
};