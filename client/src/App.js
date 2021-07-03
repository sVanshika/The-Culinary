import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Recipes from './components/Recipes';
import Blogs from './components/Blogs';
import Register from './components/Register';
import Footer from './components/Footer';
import Category from './components/category';

const App = () => {
  return(
    <div>
      <Header/>
      <Route exact path="/"><Home /> </Route>
      <Route path="/about"><About /></Route>
      <Route path="/recipes"><Recipes /></Route>
      <Route path="/blogs"><Blogs /></Route>
      <Route path="/register"><Register /></Route>
      <Route path="/breakfast"><Category category="breakfast" title="Breakfast"/></Route>
      <Route path="/snacks"><Category category="snacks" title="Snacks"/></Route>
      <Route path="/maincourse"><Category category="maincourse" title="Main Course"/></Route>
      <Route path="/desserts"><Category category="desserts" title="Desserts"/></Route>
      <Route path="/cakes"><Category category="cakes" title="Cakes"/></Route>
      <Route path="/beverages"><Category category="beverages" title="Beverages"/></Route>
      <Route path="/recipe/:dishName"> <Recipes/> </Route>
      <Footer />
    </div>
  )
}
export default App;


