import React from 'react';
import { Button } from './Button';
//import image from '/img/gallery/img_1.jpg';
import styles from './RecipeHeroSection.css';
import image from './pexels-ella-olsson-1640772.jpg';

function RecipeHeroSection() {
  return (
    <div className='hero-container'>
      <img src={image} alt='hero' />
      <h1>LEARN.COOK.SHARE</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default RecipeHeroSection;