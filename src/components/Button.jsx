import React from 'react';

const Button = ({ handler }) => (
    <div className='grid place-items-center text-2xl'>
        <button onClick={handler} className=' border-4 border-black p-4 shadow-custom'>Comenzar</button>
    </div>    
)



export default Button