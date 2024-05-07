import React from 'react';
import { useCart } from '../components/CartContext/CartContext'; 

const CartList = () => {
    const { cartItems, removeFromCart } = useCart(); 

    if (!cartItems || cartItems.length === 0) {
        return <div className="cart-list">No hay elementos en el carrito</div>;
    }

    return (
        <div className="cart-list">
            <h2>Carrito de Compras</h2>
            {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                    <h3>{item.name}</h3>
                    <p>Precio: ${item.price}</p>
                    <button onClick={() => removeFromCart(item.id)}>Eliminar</button> 
                </div>
            ))}
        </div>
    );
}

export default CartList;