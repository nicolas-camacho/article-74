import React from "react";

const GameOver = ({counter}) => (
    <div className=" grid place-items-center mt-12 font-mono mb-12">
        <h1 className=" text-2xl md:text-4xl font-extrabold">Tu puntuación final fue de</h1>
        <h1 className=" text-4xl md:text-8xl">{counter}</h1>
        <p className=" text-xl md:text-2xl">Gracias por participar!</p>
    </div>
);

export default GameOver