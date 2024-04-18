import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ product }) => {
    const [showItemCount, setShowItemCount] = useState(true);
    const [cartQuantity, setCartQuantity] = useState(0);

    const handleAddToCart = (quantity) => {
        setCartQuantity(quantity);
        setShowItemCount(false);
    };

    if (!product) {
        return <div className="item-detail">No se encontró el producto.</div>;
    }

    const { name, imageUrl, category, description, price, stock } = product;

    return (
        <article className="item-detail">
            <header>
                <h2>{name}</h2>
            </header>
            <picture>
                <img src={imageUrl} alt={name} />
            </picture>
            <section>
                <p>Categoria: {category}</p>
                <p>Descripcion: {description}</p>
                <p>Precio: ${price}</p>
            </section>
            {showItemCount && (
                <footer>
                    <ItemCount initial={0} stock={stock} onAdd={handleAddToCart} />
                </footer>
            )}
            {cartQuantity > 0 && (
                <div>
                    <button onClick={() => console.log('Ir al carrito')}>Terminar mi compra</button>
                </div>
            )}
        </article>
    );
};

export default ItemDetail;