import React, { useState } from 'react';
import { collection, addDoc, Timestamp } from 'firebase/firestore'; 
import { useCart } from '../components/CartContext/CartContext';

const CartWidget = ({ cartItems, onRemove }) => {
    const { clearCart } = useCart(); 


    const createOrder = async () => {
        try {
            const orderData = {
                buyer: {
                    name: 'Nombre del comprador', 
                    phone: 'Número de teléfono',
                    email: 'correo@example.com'
                },
                items: cartItems.map(item => ({
                    id: item.id,
                    title: item.name,
                    price: item.price
                })),
                date: Timestamp.now(), 
                total: cartItems.reduce((total, item) => total + item.price, 0) 
            };

            const ordersCollectionRef = collection(firestore, 'orders'); 
            await addDoc(ordersCollectionRef, orderData); 

            clearCart();
        } catch (error) {
            console.error('Error creating order:', error);
        }
    };

    if (!cartItems || cartItems.length === 0) {
        return <div>No hay items en el carrito</div>;
    }

    return (
        <div className="cart-widget">
            <h2>Carrito</h2>
            <div className="cart-items">
                {cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                        <p>{item.name}</p>
                        <p>${item.price}</p>
                        <button onClick={() => onRemove(item.id)}>Eliminar</button>
                    </div>
                ))}
            </div>
            <div className="cart-summary">
                <p>Total: ${cartItems.reduce((total, item) => total + item.price, 0)}</p>
                <button onClick={createOrder}>Finalizar compra</button>
            </div>
        </div>
    );
}

export default CartWidget;