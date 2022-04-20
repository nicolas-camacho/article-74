import React from "react";

const Article = () => (
    <div className='grid place-items-center m-7'>
      <h1 className='font-mono font-bold text-3xl md:text-7xl text-center mb-12 underline'>Articulo 74</h1>
      <div className="font-mono text-xl md:text-2xl p-7 border-4 border-black shadow-custom">
        <p className='mb-7'>
            Los conductores deben reducir la velocidad a treinta (30) kilómetros por hora en los siguientes casos:
        </p>
        <ul className='list-disc pl-8'>
            <li>En lugares de concentración de personas y en zonas residenciales.</li>
            <li>En las zonas escolares.</li>
            <li>Cuando se reduzcan las condiciones de visibilidad.</li>
            <li>Cuando las señales de tránsito así lo ordenen.</li>
            <li>En proximidad a una intersección.</li>
        </ul>
      </div>
    </div>
)

export default Article