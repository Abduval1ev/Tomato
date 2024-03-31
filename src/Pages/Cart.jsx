import React from 'react'
import { StoreContext } from '../components/context/StoreContext';

export default function Cart() {

  const { cartItems, food_list, removeFormCart, getTotalCartAmount } = React.useContext(StoreContext)

  return (
    <div className="cart">
      <div className="cart_items">
        <div className="cart_items_title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            {
              return (
                <div
                  key={item._id}>
                  <div
                    className="cart_items_title cart_items_item">
                    <img
                      className="cart_item_image"
                      src={item.image}
                      alt="Image"
                    />
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>
                      {item.price * cartItems[item._id]}
                    </p>
                    <span onClick={() => removeFormCart(item._id)} /*TypeError: 😂 removeFromCart*/
                      className='cross'>X</span>
                  </div>
                  <hr />
                </div>
              )
            }
          }
        })}
      </div>
      <div className="cart_bottom">
        <div className="cart_total">
          <h2>Cart Totals</h2>
          <div className="">
            <div className="cart_total_details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className='cart_total_hr' />
            <div className="cart_total_details">
              <p>Deliver Fee</p>
              <p>${2}</p>
            </div>
            <hr className='cart_total_hr' />
            <div className="cart_total_details">
              <b>Total</b>
              <b>${getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button className='cart_total_btn'>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart_promocode">
          <div>
            <p className='cart_promocode_text'>If you have a promo code, Enter it here</p>
            <div className='cart_promocode_input'>
              <input
                type="text"
                placeholder='promo code'
              />
              <button className='cart_promocode_btn'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
