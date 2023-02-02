import React, { useState } from 'react';


const SubmitForm = (enteredName,enteredAge) => {
    const [error, setError] = useState(false);
    if(!enteredName || !enteredAge){
        setError((previousValue) => {
            return !previousValue
    })}
}

export default SubmitForm;