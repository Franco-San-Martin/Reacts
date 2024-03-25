import React, { useState, useEffect } from 'react';
import { getProductById } from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail'; 
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        const productId = parseInt(itemId);

        getProductById(productId)
            .then(response => {
                setProduct(response);
            })
            .catch(error => {
                console.error(error);
            });
    }, [itemId]);

    return (
        <div>
            {product ? <ItemDetail {...product} /> : <div>Cargando producto...</div>}
        </div>
    );
}

export default ItemDetailContainer;