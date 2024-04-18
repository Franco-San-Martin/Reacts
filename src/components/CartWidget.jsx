import React from 'react';
import './CartWidget.css';

const CartWidget = ({ cartItems, onRemove }) => {
    if (!cartItems) {
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
                        onRemove={onRemove}
                    />
                ))}
            </div>
        </div>
    );
}

export default CartWidget;