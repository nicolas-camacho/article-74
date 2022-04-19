import React from "react";
import Button from "./Button";

const Case = ({ caso, handler }) => {
    
return (
    <div>
        <div>
            <img src={caso.imageSrc} alt="imagen de caso" />
            <h1>Deberia Reducir la velocidad a 30km o menos?</h1>
            <div>
                <Button handler={() => handler(true) } />
                <Button handler={() => handler(false) } /> 
            </div>
        </div>
    </div>
)};


export default Case