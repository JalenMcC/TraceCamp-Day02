import React from 'react';
import Top from './components/header';
import AboutMe from './components/AboutMe';
import Hobbies from './components/Hobbies';
import Pet from './components/Pet';
import Velkoz from './components/Velkoz';
import Trademark from './components/Trademark';

function App() {
  return(
    <div className="bg-gradient-to-r from-blue-400 via-red-500 to-yellow-800">
      <Top />
      <AboutMe />
      <Hobbies />
      <Pet />
      <Velkoz />
      <Trademark />
    </div>
  );
}
export default App;
