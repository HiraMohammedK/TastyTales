import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import image from '../images/pexels-ella-olsson-1640772.jpg';

function HeroSection() {
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
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
         LEARN MORE <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
