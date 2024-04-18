import React, { useState, useEffect } from 'react';
import { FirebaseAppProvider } from 'reactfire'; 
import { getFirestore, collection, query, getDocs } from 'firebase/firestore';
import ItemList from '../ItemList/ItemList';
import { initializeApp } from 'firebase/app'; 
import firebaseConfig from '../firebase/firestore'; 
import './ItemListContainer.css'; // Importamos los estilos CSS

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            const firebaseApp = await initializeApp(firebaseConfig);
            const firestore = getFirestore(firebaseApp);
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
        <FirebaseAppProvider firebaseConfig={firebaseConfig}>
            <div className="item-list-container">
                {loading ? <div>Cargando productos...</div> : <ItemList products={products} />}
            </div>
        </FirebaseAppProvider>
    );
};

export default ItemListContainer;
