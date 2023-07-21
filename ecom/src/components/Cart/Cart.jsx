import React from 'react'
import './Cart.scss'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useDispatch, useSelector } from 'react-redux';
import { envior } from '../../constant';
import { removeItem, resetCart } from '../../redux/cartReducer';
import {makeRequest} from "../../makeRequest";
import {loadStripe} from '@stripe/stripe-js';
const Cart = () =>{
   
const data = useSelector (state => state.cart.products)
const dispatch = useDispatch();

const totalPrice = () => {
  let total = 0;
  data.forEach((item) => {
    total += item.quantity * item.price;
  });
  return total.toFixed(2);
};


const stripePromise = loadStripe('pk_test_51NQO1XSIH3ZUJo1bs6bicK3IDSsa4n2IDOzUdcIKwpjIrABtEuEZy3A0lfg9P7hFbSx77nH9KB6GEvaaymKMZQtf00ED96xxGs')
const handlePayment = async () => {
  try {
    const stripe = await stripePromise;
    const res = await makeRequest.post("/orders", {
      data,
    });
    await stripe.redirectToCheckout({
      sessionId: res.data.stripeSession.id,
    });

  } catch (err) {
    console.log(err);
  }
};


  return (
    <div className="cart">
      
        <h1>Products in your cart</h1>
        {data?.map(item=>(
            <div className="item" key = {item.id}>
                <img src = {envior.REACT_APP_UP_URL +  item.img}/>
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0,100)}</p>
                    <div className="price">
                        {item.quantity} x ${item.price}
                    </div>
                </div>
                <DeleteOutlinedIcon className='delete' onClick = {()=>dispatch(removeItem(item.id))} />

            </div>
        ))}
         <div className="total">
        <span>SUBTOTAL</span>
        <span>{totalPrice()}</span>
      </div>
      <button onClick={handlePayment}> PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>

      
    </div>
  )
}

export default Cart