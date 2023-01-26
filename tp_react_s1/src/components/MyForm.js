import React, { useState } from 'react';

const MyForm = (props) => {
  const [enteredName, setenteredName] = useState('');
  const [enteredAge, setenteredAge] = useState('');

  const nameChangeHandler = (event) => {
    setenteredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setenteredAge(event.target.value);
  };

  const submitHandler = (event) => {
  event.preventDefault();

    const peopleData = {
      name: enteredName,
      age: enteredAge + ' ans',
    };

    props.onSavePeopleData(peopleData);
    setenteredName('');
    setenteredAge('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Name</label>
          <input
            type='text'
            value={enteredName}
            onChange={nameChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Age</label>
          <input
            type='number'
            min='1'
            step='1'
            value={enteredAge}
            onChange={ageChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type='submit' >Add People</button>
      </div>
    </form>
  );
};

export default MyForm;