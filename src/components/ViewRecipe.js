import React, { useState, useEffect } from 'react';

const ViewRecipe = ({ match }) => {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Fetch recipe details by recipe ID from the backend
    fetch(`http://localhost/php-react/userrecipes/${match.params.id}`)
      .then((response) => response.json())
      .then((data) => setRecipe(data));
  }, [match.params.id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="view-recipe">
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
      <h3>Summary:</h3>
      <p>{recipe.summary}</p>
      <h3>Ingredients:</h3>
      <p>{recipe.ingredients}</p>
      <h3>Instructions:</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default ViewRecipe;


/*import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ViewRecipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Fetch the recipe details by ID from the backend
    fetch(`http://localhost/php-react/getRecipeById.php?id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        setRecipe(data);
      })
      .catch((error) => {
        console.error('Error fetching recipe details:', error);
      });
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ background: 'red', minHeight: '100vh', padding: '20px', color: 'white' }}>
      <h1>{recipe.title}</h1>
      <img src={recipe.picture_url} alt={recipe.title} style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '10px' }} />
      <h2>Summary</h2>
      <p>{recipe.summary}</p>
      <h2>Ingredients</h2>
      <p>{recipe.ingredients}</p>
      <h2>Instructions</h2>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default ViewRecipe;*/
