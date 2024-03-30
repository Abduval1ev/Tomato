import React from 'react'
import { StoreContext } from '../components/context/StoreContext';

export default function Cart() {

  const { cartItems, food_list, removeFromCart } = React.useContext(StoreContext)

  return (
    <div className="cart">
      <div className="cart_items">
        <div className="cart_item_title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            console.log(cartItems);
            {
              return (
                <div className="cart_items_title">
                  <p>{item.name}</p>
                </div>
              )
            }
          }
        })}
      </div>
    </div>
  )
}
