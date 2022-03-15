// importing react in every component file
import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import './App.css';

function App() {
  const [categories] = useState([
    { name: "commercial", description: "Photos of grocery stores, food trucks, and other commercial projects",},
    { name: "portraits", description: "Portraits of people in my life" },
    { name: "food", description: "Delicious delicacies" },
    { name: "landscape", description: "Fields, farmhouses, waterfalls, and the beauty of nature",},
  ]);

  // destructure array, useState always returns array with two values
  // first thing is current state, second is function that allows you to update current state
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        {/* pass the current cat the cat selected by the user */}
        <Gallery currentCategory={currentCategory}></Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;
