import React, { useState, useEffect } from 'react';
import { FirebaseAppProvider } from 'reactfire';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import firebaseConfig from "../firebase/firestore";
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom'; 
import { useCart } from '../CartContext/CartContext'; // Importa useCart

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams(); 

    const { addToCart } = useCart(); // Usa el contexto del carrito

    useEffect(() => {
        const fetchProducts = async () => {
            const firebaseApp = await initializeApp(firebaseConfig);
            const firestore = getFirestore(firebaseApp);
            const productsCollection = collection(firestore, 'productos');
            let q = query(productsCollection);

            if (categoryId) {
                q = query(productsCollection, where('category', '==', categoryId));
            }

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
    }, [categoryId]);

    const handleAddToCart = (product) => {
        addToCart(product); // Agrega el producto al carrito usando el contexto
        console.log('Agregando al carrito:', product);
    };

    return (
        <div className="item-list-container">
            {loading ? <div>Cargando productos...</div> : (
                <FirebaseAppProvider firebaseConfig={firebaseConfig}>
                    <ItemList products={products} onAddToCart={handleAddToCart} />
                </FirebaseAppProvider>
            )}
        </div>
    );
};

export default ItemListContainer;