import React, { useState, useEffect } from 'react';
import {Card} from '../components/Card';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = localStorage.getItem('favorites');
    setFavorites(favs ? JSON.parse(favs) : []);
  }, []);

  return (
    <div>
      <h2>Pagina de favoritos</h2>
      {favorites.map((favorite, index) => (
        <Card key={index} {...favorite} isFavorite />
      ))}
    </div>
  );
}

export default Favorites;