import React, { useRef } from 'react';

function AInfoInput({name, onChange, value, placeholder, inputRef }) {
    const inputRdf = useRef();

    // console.log(inputRdf.current);

    return (
        <input type="text" 
            name={name}
            onChange={onChange} 
            value={value} 
            placeholder={placeholder}
            ref={inputRef}
            />
    );
}

AInfoInput.defaultProps = {
    ref: null
}


export default AInfoInput;