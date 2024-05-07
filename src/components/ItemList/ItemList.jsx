import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ products, onAddToCart }) => {
    return (
        <div className="item-list">
            {products.map(product => (
                <div key={product.id} className="product-item">
                    <h3>{product.name}</h3>
                    <p>Precio: ${product.price}</p>
                    <Link to={`/item/${product.id}`}>Ver detalle</Link>
                    <button onClick={() => onAddToCart(product)}>Agregar al carrito</button>
                </div>
            ))}
        </div>
    );
};

export default ItemList;