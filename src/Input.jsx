import React from 'react';

const Input = ({ inputHandler }) => {
    return (
        <div className='py-3 position-sticky top-0 bg-black '>
            <input type="text" className='form-control' placeholder='Type Movie Name Here...' onKeyUp={(e) => inputHandler(e.target.value)} />
            
        </div>
    );
}

export default Input;
