import React, {useState} from "react";
import Button from "./Button";


const CONGRATULATIONS = "Genial estas un paso mas cerca de obtener tu licencia!";
const FAILURE = "Barro, estas mas cerca de recibir una multa!";

const Case = ({ caso, counterHandler, nextHandler }) => {

    const [pause, setPause] = useState(false);
    const [message, setMessage] = useState(CONGRATULATIONS);
    const [gif, setGif] = useState(null);

    const searchGif = (text) => {
        const giphyKey = import.meta.env.VITE_GIPHY_KEY
        let giphyApiURL = `https://api.giphy.com/v1/gifs/search?q=${text}&api_key=${giphyKey}`;
        fetch(giphyApiURL).then(data => {
            return data.json()
        }).then(json => {
            let randomIndex = Math.floor(Math.random() * (json.data.length - 1));
            let imgPath = json.data[randomIndex].images.fixed_height.url
            setGif(imgPath);
        });
    }

    const validationHandler = async (selection) => {
        if (caso.answer === selection) {
            counterHandler(true);
            setMessage(CONGRATULATIONS);
            searchGif('congrats');
        } else {
            setMessage(FAILURE);
            searchGif('no');
        }
        setPause(true);
    }

    const continueHandler = () => {
        setPause(false);
        nextHandler();
    }
    
    return (
        <div className=" flex justify-evenly m-20 flex-wrap font-mono">
            {pause === false ? 
                <img className=" border-4 border-black" src={caso.imageSrc} alt="imagen de caso" width={700}/> :
                <img className=" border-4 border-black" src={gif} alt="gif de juego en pausa" width={700} />}
            <div className="grid place-items-center mt-5">
                {!pause && <h1 className="text-2xl md:text-4xl font-bold">¿Deberia Reducir la velocidad a 30km o menos?</h1>}
                {!pause && (
                    <div className="grid gap-10 grid-cols-2 mt-10 place-items-start">
                        <Button handler={() => validationHandler(true) } text="Si Deberia" />
                        <Button handler={() => validationHandler(false) } text="No Deberia" /> 
                    </div>
                )}
                {pause && (
                    <div className="grid gap-10 place-items-center">
                        <h1 className="text-2xl md:text-4xl mt-6 mb-6">{message}</h1>
                        <Button handler={continueHandler} text="Continuar" />
                    </div>
                )}
            </div>
        </div>
    )
};


export default Case