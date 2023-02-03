import React, { useState } from 'react';


const SubmitForm = ({error,children}) => {
    return(
    <>
    {error && <div className='Error'>Invalid Syntax</div>}
    {children}
    </>
    );
};

export default SubmitForm;