import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartList from './components/CartList'; 
import { CartProvider } from '../src/components/CartContext/CartContext';

const App = () => {
    return (
        <CartProvider>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path='/' element={<ItemListContainer />} />
                    <Route path='/category/:categoryId' element={<ItemListContainer />} /> {/* Ruta para filtrar por categoría */}
                    <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                    <Route path='/cart' element={<CartList />} />
                    <Route path='*' element={<h1>404 NOT FOUND</h1>} />
                </Routes>
            </BrowserRouter>
        </CartProvider>
    );
};

export default App;