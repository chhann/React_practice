import React from 'react';

function InfoInput({ set, value }) {
    const handleInputChange = (e) => {
        set(e.target.value);
        
    }
    

    return (
        <>
            <input type="text" name="" onChange={handleInputChange} placeholder={value} value={value}/>

        </>
    );
}

export default InfoInput;