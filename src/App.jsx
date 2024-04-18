import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartWidget from './components/CartWidget';
import { CartProvider } from './components/CartContext/CartContext';

const App = () => {
    return (
        <CartProvider>
            <BrowserRouter>
                <NavBar/>
                <CartWidget/>
                <Routes>
                    <Route path='/' element={<ItemListContainer />} />
                    <Route path='/category/:categoryId' element={<ItemListContainer />} />
                    <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                    <Route path='*' element={<h1>404 NOT FOUND</h1>} />
                </Routes>
            </BrowserRouter>
        </CartProvider>
    );
};

export default App;