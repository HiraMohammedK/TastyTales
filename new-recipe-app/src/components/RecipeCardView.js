// RecipeCardView.js
import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCardView = ({ recipe }) => {
  return (
    <div style={{ margin: '10px', width: '300px', background: 'white', borderRadius: '10px', padding: '10px' }}>
      <img src={recipe.picture_url} alt={recipe.title} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px' }} />
      <h3>{recipe.title}</h3>
      <Link to={`/view/${recipe.id}`} style={{ color: 'red', textDecoration: 'none' }}>View Recipe</Link>
    </div>
  );
};

export default RecipeCardView;

