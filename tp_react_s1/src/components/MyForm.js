import React, { useState } from 'react';
import './MyForm.css'

const MyForm = (props) => {
  const [enteredName, setenteredName] = useState('');
  const [enteredAge, setenteredAge] = useState('');
  const [error, setError] = useState(false);

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

  const SubmitForm = () => {
    if(!enteredName || !enteredAge){
        setError((previousValue) => {
            return !previousValue
    })}
}

  return (
    <form onSubmit={submitHandler}>
      <div>
        <div>
          <label>Name</label>
          <input
            type='text'
            value={enteredName}
            onChange={nameChangeHandler}
          />
          
        </div>
        <div>
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
      <div>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button onSubmit={SubmitForm}>Add People</button>
        {error && <div className='Error'>Invalid Syntax</div>}
      </div>
    </form>
  );
};



export default MyForm;