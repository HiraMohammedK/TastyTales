import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import RecipeUploadPage from "./components/RecipeUploadPage";
import RecipeHome from "./pages/RecipeHome";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Settings from "./pages/Settings";
import Contact from "./components/Contact";
import {Login} from "./components/Login";
import Register from "./components/Register";
import UploadsByYou from "./components/UploadsByYou";
import ViewRecipe from "./components/ViewRecipe"
function App() {
  return (
    <Router>
      <Navbar />
      <div className="container main">
        <Routes>
          <Route path="/" element={<RecipeHome />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/recipe-home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recipe-upload" element={<RecipeUploadPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/uploads-by-you" element={<UploadsByYou />} />
          <Route path="/view-recipe" element={<ViewRecipe />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App;
