import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({id, name, img, price, stock}) => {
    return(
        <article className="card-item">
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
                <Link to={`/Item/${id}`}>Ver detalle</Link>
            </footer> 
        </article>
    )
}

export default Item;