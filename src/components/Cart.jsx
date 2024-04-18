import React from 'react';

const Cart = ({ id, name, img, price, stock, onRemove }) => {
    return (
        <article className="cart-item">
            <header>
                <h2>{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} />
            </picture>
            <section>
                <p>Precio: ${price}</p>
                <p>Stock disponible: {stock}</p>
            </section>
            <footer>
                <button onClick={() => onRemove(id)}>Eliminar</button>
            </footer>
        </article>
    );
}

export default Cart;