import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const RecipeUploadPage = () => {
  const [title, setTitle] = useState('');
  const [picture, setPicture] = useState(null);
  const [summary, setSummary] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handlePictureChange = (event) => {
    setPicture(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a FormData object to send data to the server
    const formData = new FormData();
    formData.append('title', title);
    formData.append('picture', picture);
    formData.append('summary', summary);
    formData.append('ingredients', ingredients);
    formData.append('instructions', instructions);

    try {
      // Send the form data to the backend
      const response = await fetch('http://localhost/php-react/uploadRecipe.php', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Handle success, e.g., show a success message or redirect
        console.log('Recipe uploaded successfully.');
      } else {
        // Handle errors, e.g., show an error message
        console.error('Recipe upload failed.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="RecipeUploadPage">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <h1 className="text-center my-4">Upload Recipe</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label className="text-white">Title</Form.Label>
                <Form.Control
                  type="text"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  className="form-control-lg bg-light text-black"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="text-white">Picture</Form.Label>
                <Form.Control type="file" onChange={handlePictureChange} />
              </Form.Group>
              <Form.Group>
                <Form.Label className="text-white">Summary</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={summary}
                  onChange={(event) => setSummary(event.target.value)}
                  className="form-control-lg bg-light text-black"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="text-white">Ingredients</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  value={ingredients}
                  onChange={(event) => setIngredients(event.target.value)}
                  className="form-control-lg bg-light text-black"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="text-white">Instructions</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={10}
                  value={instructions}
                  onChange={(event) => setInstructions(event.target.value)}
                  className="form-control-lg bg-light text-black"
                />
              </Form.Group>
              <Button variant="light" type="submit" size="lg" block>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RecipeUploadPage;