import React from 'react';
import CartWidget from './CarWidget';

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
            <div className="container">
                <a className="navbar-brand" href="#">Mercado Córdoba</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Ropa</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Electronica</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Comidas</a>
                        </li>
                    </ul>
                </div>
                <CartWidget itemCount={5} />
            </div>
        </nav>
    );
}