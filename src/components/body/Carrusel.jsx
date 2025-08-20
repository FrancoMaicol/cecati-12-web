import { useEffect, useState } from 'react'
import CAED from '../../assets/body/CAED.png'
import vision from '../../assets/body/vision.png'
import mision from '../../assets/body/mision.svg'
import caracteristicas from '../../assets/body/caracteristicas.png'
import discapacidad from '../../assets/body/discapacidad.png'
import inscripcion from '../../assets/body/inscripcion.png'
import ubicacion from '../../assets/body/ubicacion.png'
import sol from '../../assets/body/sol.jpg'


export default function Carrusel() {
  const [index, setIndex] = useState(0);
  const img = [CAED, vision, mision, caracteristicas, discapacidad, inscripcion, ubicacion, sol ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % img.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [])
    return( 
     <div className='carousel w-full'>
      {img.map((src, i) => {
        return(
          <div 
          key={i}
          className={`carousel-item w-full ${i === index ? "block" : "hidden" }`}
        >
          <img src={src} className='w-full h-auto' alt="Imagenes de carrusel" />
        </div>
        )
      })}
     </div>
    )
}