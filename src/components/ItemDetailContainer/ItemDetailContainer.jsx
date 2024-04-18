import React, { useState, useEffect } from 'react';
import { getFirestore, collection, query, getDocs, where } from 'firebase/firestore';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            const firestore = getFirestore();
            const productsCollection = collection(firestore, 'products');
            const q = query(productsCollection);

            try {
                const querySnapshot = await getDocs(q);
                const productsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setProducts(productsData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            {loading ? <div>Cargando productos...</div> : <ItemList products={products} />}
        </div>
    );
};

export default ItemListContainer;