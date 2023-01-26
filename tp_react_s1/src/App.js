import React, { useState } from 'react';
import './App.css';

import NewPeople from './components/NewPeople';
import Peoples from './components/Peoples'


const SOMEPEOPLES = [
  {
    id : '',
    name : '',
    age : '',
  },

];

function App() {
  const [peoples, addPeoples] = useState(SOMEPEOPLES);

  function addPeoplesHandler(people) {
    addPeoples(
      (prevPeoples) =>{
        return[people, ...prevPeoples];
      }
    );
  };

  return (
    <div className='App-header'>
      <NewPeople onAddPeople={addPeoplesHandler} />
      <Peoples items={peoples} />
    </div>
  );
}

export default App;
