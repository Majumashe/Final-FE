import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Card = ({ id, name, email, phone_number, website, isFavorite }) => {

    const history = useNavigate()

    const addToFavorites = () => {
        const favorite = { id, name, email, phone_number, website };
        let favorites = localStorage.getItem('favorites');
        favorites = favorites ? JSON.parse(favorites) : [];
        if (favorites.some(fav => fav.phone_number === phone_number || fav.id === id)) {
            alert('Esta card ya esta en tus favoritos');
        } else {
            favorites.push(favorite);
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }
    };

    const removeFromFavorites = () => {
        let favorites = localStorage.getItem('favorites');
        favorites = favorites ? JSON.parse(favorites) : [];

        const updatedFavorites = favorites.filter(
            (fav) => fav.phone_number !== phone_number && fav.id !== id
        );

        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    const goToDentistPage = () => {
        history(`/dentist/${id}`);
    };

    return (
        <div className="card">
            <p>{name}</p>
            <p>Email: {email}</p>
            <div className="card-buttons">
                {isFavorite ? (
                    <button onClick={removeFromFavorites}>Eliminar favorito</button>
                ) : (
                    <button onClick={addToFavorites}>Agregar favorito</button>
                )}
                <button onClick={goToDentistPage}>Ver detalles</button>
            </div>
        </div>
    );
}
