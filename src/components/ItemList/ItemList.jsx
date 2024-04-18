import React from 'react';
import Item from '../Item/Item';
import './ItemList.css'; 

const ItemList = ({ products }) => {
    // Verificar si products es un array válido
    if (!Array.isArray(products)) {
        return <div>No hay productos disponibles.</div>;
    }

    return (
        <div className='list-group'>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    );
};

export default ItemList;