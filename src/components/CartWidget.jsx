import React from 'react';
import Cart from './Cart'; 
import { useCart } from '../components/CartContext/CartContext';

const CartWidget = () => {
    const { cartItems, removeFromCart } = useCart(); 

    if (!cartItems || cartItems.length === 0) {
        return <div className="cart-widget">No hay items en el carrito</div>;
    }

    return (
        <div className="cart-widget">
            <h2>Carrito</h2>
            <div className="cart-items">
                {cartItems.map(item => (
                    <Cart
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        img={item.img}
                        price={item.price}
                        stock={item.stock}
                        onRemove={removeFromCart} 
                    />
                ))}
            </div>
        </div>
    );
}

export default CartWidget;