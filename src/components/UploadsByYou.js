import React, { useState, useEffect } from 'react';
import RecipeCardView from './RecipeCardView';

const UploadsByYou = ({ userId }) => {
  const [userRecipes, setUserRecipes] = useState([]);

  useEffect(() => {
    // Fetch user's recipes from the backend
    fetch(`http://localhost/php-react/userrecipes?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => setUserRecipes(data));
  }, [userId]);

  return (
    <div className="uploads-by-you">
      <h2>Your Uploaded Recipes</h2>
      <div className="recipe-list">
        {userRecipes.map((recipe) => (
          <RecipeCardView key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default UploadsByYou;








