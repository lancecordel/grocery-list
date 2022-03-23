import React from 'react';
import './App.css';
import Main from './components/Main';
import AddItem from './components/AddItem';
import NewItem from './components/NewItems';
import Main2 from './components/Main2';


function App() {

  return (
    <div className="App">
      <div id='layout'>
      <h3>Grocery List</h3>
      <AddItem/>
      <Main/>
      <Main2/>
      </div>
    </div>
  );
}

export default App;
