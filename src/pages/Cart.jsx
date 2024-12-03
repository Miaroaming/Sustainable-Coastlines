import {useContext} from 'react'
import { CartContext } from '../context/CartContext'
import Seo from '../components/Seo';

const Cart = () => {
  const { cart, updateCart, removeFromCart } = useContext(CartContext);

  const handleIncrement = (item) => {
    updateCart(item.id, item.quantity + 1); // Increase quantity by 1
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      updateCart(item.id, item.quantity - 1); // Decrease quantity by 1
    } else {
      removeFromCart(item.id); // Remove item if quantity is 1
    }
  };
  return (
    <>
    <Seo
        title="Your Cart - Sustainable Coastlines"
        description="Browse your cart"
        url={window.location.href}
      />
    <div className='header'>
        <div className='header-text'>
            <h1>Your Cart</h1>
            <h3>Big or small, your donation helps to protect the moana we all love.</h3>
        </div>

        <img id='shop-header-img' src="/images/shop-header.jpg" alt="nz-beach-volunteers" />
    </div>

    <div className='cart-cont'>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className='cart-product-list'>
          {cart.map((item) => (
            <li key={item.id}>
              {item.images && item.images.length > 0 && (
              <img 
                src={item.images[0].src} 
                alt={item.images[0].alt || item.name}  
              />
            )}
              <h2>{item.name}</h2>
              <p>Price: ${parseFloat(item.prices.price /100).toFixed(2)}</p>
              <p>Quantity: {item.quantity}</p>
              <div className='cart-btns'>
              <button className='quantity-btn' onClick={() => handleDecrement(item)}>-</button>
              <button className='quantity-btn' onClick={() => handleIncrement(item)}>+</button>
              <button className='secondary-btn' onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
              
            </li>
          ))}
        </ul>
      )}
      <button className='primary-btn' id='checkout-btn'>Proceed to Checkout</button>
    </div>
    </>
  )
}

export default Cart
