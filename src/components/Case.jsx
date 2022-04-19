import React from "react";
import Button from "./Button";

const Case = ({ caso, handler }) => {
    
return (
    <div className=" flex justify-evenly m-20 flex-wrap font-mono">
        <img className=" border-4 border-black" src={caso.imageSrc} alt="imagen de caso" width={800}/>
        <div className="grid place-items-center mt-5">
            <h1 className="text-2xl md:text-4xl font-bold">Deberia Reducir la velocidad a 30km o menos?</h1>
            <div className="grid gap-10 grid-cols-2 mt-5 place-items-start lg:mt-0">
                <Button handler={() => handler(true) } text="Si Deberia" />
                <Button handler={() => handler(false) } text="No Deberia" /> 
            </div>
        </div>
    </div>
)};


export default Case