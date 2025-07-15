import React from 'react';
import './App.css';
import Header from './components/Header';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';

function App() {
  return (
    <div className="container">
      <Header />
      <Summary />
      <Experience />
      <Education />
      <Skills />
    </div>
  );
}

export default App;
