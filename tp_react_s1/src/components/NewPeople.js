import React, { useState } from 'react';

import './NewPeople.css';
import MyForm from './MyForm';

function NewPeople(props) {
  const [isEditing, setIsEditing] = useState(false);

  const savePeopleDataHandler = (enteredPeopleData) => {
    const peopleData = {
      ...enteredPeopleData,
      id: Math.random().toString(),
    };
    props.onAddPeople(peopleData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  
  return (
    <div className='new-people'>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add Name and Age</button>
      )}
      {isEditing && (
        <MyForm
            onSavePeopleData={savePeopleDataHandler}
            onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewPeople;