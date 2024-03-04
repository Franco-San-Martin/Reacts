import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
    return (
        <div>
            <NavBar />
            <ItemListContainer greeting="Bienvenidos al mercado más grande de Córdoba!" />
        </div>
    );
};

export default App;