import React, { useContext } from 'react';
import { ThemeContext } from '../providers/ThemeProvider';
import { Link } from 'react-router-dom';

export const Header = () => {

    const { toggleTheme } = useContext(ThemeContext);
    return (
        <div className='header'>
            <nav className='navigation'>
                <ul className='navigation__list'>
                    <li><Link to="/home">Inicio</Link></li>
                    <li><Link to="/favs">Favoritos</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </nav>
            <button className='header__theme-btn' onClick={toggleTheme}>Cambiar tema</button>
        </div>
    )
}