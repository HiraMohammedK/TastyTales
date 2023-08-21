import React from 'react';
import RecipeHeroSection from '../components/RecipeHeroSection';
import Footer from '../components/Footer';
import Navbar from "../components/Navbar"
export default function Home(){
  return (
      <div>
          <Navbar />
          <RecipeHeroSection />
      </div>
  )
}