import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className='navbar'>
            <Link to='/'>
                <h3>Mercado Córdoba</h3>
            </Link>
            <div className='navbar-categories'>
                <NavLink to={`/category/clothes`} activeClassName='active-option'>Ropa</NavLink>
                <NavLink to={`/category/electronics`} activeClassName='active-option'>Electrónica</NavLink>
                <NavLink to={`/category/foods`} activeClassName='active-option'>Comidas</NavLink>
            </div>
            <NavLink to="/cart" activeClassName="active-option">Ver Carrito</NavLink>
        </nav>
    )
}

export default NavBar;