import { useEffect, useState } from 'react'
import CAED from '../../assets/body/CAED.png'
import vision from '../../assets/body/vision.png'
import mision from '../../assets/body/mision.svg'
import caracteristicas from '../../assets/body/caracteristicas.png'
import discapacidad from '../../assets/body/discapacidad.png'
import inscripcion from '../../assets/body/inscripcion.png'
import ubicacion from '../../assets/body/ubicacion.png'
import sol from '../../assets/body/sol.jpg'

const img = [CAED, vision, mision, caracteristicas, discapacidad, inscripcion, ubicacion, sol ]

export default function Carrusel() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % img.length);
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return(
        <div className='h-[500px] md:h[600px] overflow-hidden relative w-full'>
            <div className='flex transition-transform duration-700 ease-in-out w-full h-full' style={{ transform: `translateX(-${index * 100}%)`, width: `${img.length * 100}%`}}>
                {img.map((src, i) => (
                    <div key={i} className='w-full  h-full flex-shrink-0'>
                        <img src={src} className='w-full h-full object-cover' />
                    </div>
                ))}
            </div>
        </div>

        

    )
} 