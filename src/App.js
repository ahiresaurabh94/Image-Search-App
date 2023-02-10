
import React from 'react';
import './App.css';
import SearchPhotos from './components/search';

function App() {
  
  return (
    <div className="App">
      <div className="container">
        <div className='flx'>
        <h1 className="title">React Photo Search</h1>
        <button>Bookmarks</button>
        </div>
        
        <SearchPhotos />
        
      </div>
    </div>
  );
}

export default App;