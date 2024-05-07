import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FirebaseAppProvider } from 'reactfire';
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import firebaseConfig from "../firebase/firestore";
import ItemDetail from '../ItemDetail/ItemDetail'; 

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams(); // Obtener el ID del producto de la URL

    useEffect(() => {
        const fetchProduct = async () => {
            const firebaseApp = await initializeApp(firebaseConfig);
            const firestore = getFirestore(firebaseApp);
            const productRef = doc(firestore, 'productos', itemId); // Referencia al documento del producto

            try {
                const productDoc = await getDoc(productRef);
                if (productDoc.exists()) {
                    const productData = { id: productDoc.id, ...productDoc.data() };
                    setProduct(productData);
                    setLoading(false);
                } else {
                    console.log("No such product document!");
                }
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [itemId]);

    const handleAddToCart = (quantity) => {
        // Aquí puedes implementar la lógica para agregar el producto al carrito
        console.log('Agregando al carrito:', product);
    };

    return (
        <div className="item-detail-container">
            {loading ? (
                <div>Cargando detalle del producto...</div>
            ) : (
                <FirebaseAppProvider firebaseConfig={firebaseConfig}>
                    <ItemDetail product={product} onAddToCart={handleAddToCart} />
                </FirebaseAppProvider>
            )}
        </div>
    );
};

export default ItemDetailContainer;