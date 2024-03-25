import React, { useState, useEffect } from 'react';
import { getProductById } from '../../asyncMock';
import ItemCount from "../ItemCount/ItemCount";
import { useParams } from 'react-router-dom';

const ItemDetail = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        console.log("ID recibido:", id); // Verifica el id recibido
        getProductById(parseInt(id))
            .then(response => {
                setProduct(response);
            })
            .catch(error => {
                console.error(error);
            });
    }, [id]);

    if (!product) {
        return <div>Cargando producto...</div>;
    }

    const { name, imageUrl, category, description, price, stock } = product;

    return (
        <article>
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
            <footer>
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada')} />
            </footer>
        </article>
    );
}

export default ItemDetail;