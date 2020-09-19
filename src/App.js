import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Intro from './components/Intro';
import RepoList from './components/Repos';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <RepoList />
      <Footer />
    </div>
  );
}

export default App;
