import React from 'react';
import Basics from './components/Basics';
import './App.css';
import './components/TreeParent';
import TreeParent from './components/TreeParent';
import BookContextProvider from './contexts/BookContext';

function App() {
  return (
    <div className="App">
      <Basics />
      <BookContextProvider>
        <TreeParent />
      </BookContextProvider>
    </div>
  );
}

export default App;
