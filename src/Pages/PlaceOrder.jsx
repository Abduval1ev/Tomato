import React from 'react'
import { StoreContext } from '../components/context/StoreContext'

export default function PlaceOrder() {

  const { getTotalCartAmount } = React.useContext(StoreContext)

  return (
    <form className='plase_order'>
      <div className="place_order_left">
        <p className="title">Delivery Information</p>
        <div className="multi_fields">
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name' />
        </div>
        <input type="email" placeholder='Email addres' />
        <input type="text" placeholder='Store' />
        <div className="multi_fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi_fields">
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="place_order_right">
        <div className="cart_total">
          <h2 className='place_order_right_title'>Cart Totals</h2>
          <div>
            <div className="cart_total_details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className='cart_total_hr' />
            <div className="cart_total_details">
              <p>Deliver Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr className='cart_total_hr' />
            <div className="cart_total_details">
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button className='cart_total_btn'>PROCEED TO PAYMET</button>
        </div>
      </div>
    </form >
  )
}
