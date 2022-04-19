import React from 'react';

const Button = ({ handler, text }) => (
    <div className='grid place-items-center font-extrabold text-lg md:text-2xl'>
        <button onClick={handler} className=' border-4 border-black p-4 shadow-custom'>{text}</button>
    </div>    
)



export default Button