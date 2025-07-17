import CAED from '../../assets/body/CAED.png'
import vision from '../../assets/body/vision.png'
import mision from '../../assets/body/mision.svg'
import caracteristicas from '../../assets/body/caracteristicas.png'
import discapacidad from '../../assets/body/discapacidad.png'
import inscripcion from '../../assets/body/inscripcion.png'
import ubicacion from '../../assets/body/ubicacion.png'
import Carrusel from '../body/Carrusel'

export default function Caed() {
    return (
        <main className="mt-10">
            <Carrusel/>
            <h1 className='mt-100 text-6xl text-center font-bold mb-10'>¿Quiénes Somos?</h1>
            <div className='flex flex-col md:flex-row items-center justify-center gap-6 mb-10 px-6'>
                <div className=' md:w-1/2 flex justify-center'>
                    <img src={CAED} alt="Logo CAED" className='max-w-lg w-full h-auto rounded-lg shadow-md'/>
                </div>

                <div className='w-full md:lg-1/2'>
                    <p className='text-2xl text-justify text-black px-6 font-[Noto_Sans] pr-18'>
                        La Subsecretaría de Educación Media Superior ofrece una opción educativa llamada Preparatoria Abierta a través de los Centros de Atención para Estudiantes con Discapacidad (CAED). Esta opción está dirigida a personas con discapacidad intelectual, auditiva, visual, motriz, entre otras. Los estudiantes reciben asesorías educativas gratuitas y especializadas. A diferencia de la modalidad escolarizada, la Preparatoria Abierta permite a los estudiantes concluir sus estudios de bachillerato de manera autónoma, sin importar su edad o el tiempo que les tome aprobar los módulos. En México, actualmente hay 287 centros CAED en todo el país.
                    </p>
                </div>
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-2 gap-6 p-6'>
                <div className='max-w-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 p-5'>
                    <div className='flex items-center justify-center'>
                        <img className="rounded-t-lg h-48 object-cover" src={mision} alt="Imagen de mision" />
                    </div>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-5xl font-bold tracking-tight text-gray-900 dark:text-white text-center font-[Noto_Sans]">Misión</h5>
                        </a>
                        <p className="mb-3 font-normal text-white dark:text-white font-[Noto_Sans] text-2xl text-justify"> Proporcionar educación de bunea calidad a nivel bachillerato en la modalidad no escolarizada para estudiantes con discapacidad que desean iniciar, continuar o concluir sus estudios generando las condiciones que faciliten su aprendizaje, integración y desarrollo en un marco de inclusión y respeto.  
                        </p>
                    </div>
                </div>
                <div className='max-w-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-rose-700 dark:border-gray-700 p-5'>
                    <div className='flex items-center justify-center'>
                        <img className="rounded-t-lg h-48 object-cover" src={vision} alt="Imagen de vision" />
                    </div>
                    <h2 className='text-5xl font-bold  pt-4 text-center mb-4 tracking-tight text-gray-900 dark:text-white font-[Noto_Sans]'>Visión</h2>
                    <p className=' px-6 font-[Noto_Sans] text-white text-2xl text-justify'>
                        Hacer que CAED sea un lugar donde todos los estudiantes con discapacidad puedan estudiar en preparatoria, recibiendo una educación de calidad que respeta sus diferencias.
                    </p>
                </div>

                <div className='max-w-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-cyan-700 dark:border-gray-700 p-5'>
                    <div className='flex items-center justify-center'>
                        <img className="rounded-t-lg h-48 object-cover" src={caracteristicas} alt="Imagen de caracteristicas" />
                    </div>
                    <h2 className='text-5xl font-bold  pt-4 text-center mb-4 tracking-tight text-gray-900 dark:text-white font-[Noto_Sans]'>Características</h2>
                    
                    <ul className='list-disc list-inside text-white mt-4 text-center text-2xl'>
                        <li>Es flexible</li>
                        <li>No hay examen de admisión</li>
                        <li>No hay límite de edad</li>
                        <li>Los tramites son gratuitos(a excepción del examen)</li>
                    </ul>
                </div>

                <div className='max-w-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-lime-700 dark:border-gray-700 p-5'>
                    <div className='flex items-center justify-center'>
                        <img className="rounded-t-lg h-48 object-cover" src={discapacidad} alt="Imagen de discapacidad" />
                    </div>
                    <h2 className='text-5xl font-bold  pt-4 text-center mb-4 tracking-tight text-gray-900 dark:text-white font-[Noto_Sans]'>Servicios para el Estudiante</h2>
                    
                    <ul className='list-disc list-inside text-white mt-4 text-center text-2xl'>
                        <li>Asesoría por asignatura</li>
                        <li>Horario flexible</li>
                        <li>Material didáctico adaptado a las diferentes discapacidades</li>
                        <li>Asesores académicos</li>
                    </ul>
                </div>
            </div>
            <div className='max-w-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-yellow-700 dark:border-gray-700 p-5 m-5'>
                <div className='flex items-center justify-center'>
                    <img className="rounded-t-lg h-48 object-cover" src={inscripcion} alt="Imagen de discapacidad" />
                </div>
                <h2 className='text-5xl font-bold  pt-4 text-center mb-4 tracking-tight text-gray-900 dark:text-white font-[Noto_Sans]'>Requisitos de inscripción</h2>
                
                <ul className='list-disc list-inside text-white mt-4 text-center text-2xl'>
                    <li>Sin limite de edad</li>
                    <li>Sin examen de admisión</li>
                    <li>Certificado de sencudaria (original y copia)</li>
                    <li>Certificado de discapacidademitido por dependecia publica IMSS, ISSTE, DIF, etc...(no particular)</li>
                    <li>2 fotografías tamaño infantil</li>
                    <li>Identificación oficial con fotografía</li>
                    <li>Acta de Nacimiento</li>
                    <li>CURP</li>
                </ul>
            </div>

            <div className='max-w-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-fuchsia-700 dark:border-gray-700 p-5 m-5'>
                <div className='flex items-center justify-center'>
                    <img className="rounded-t-lg h-48 object-cover" src={ubicacion} alt="Imagen de ubicacion" />
                </div>
                <h2 className='text-5xl font-bold  pt-4 text-center mb-4 tracking-tight text-gray-900 dark:text-white font-[Noto_Sans]'>Para mayor información acude a:</h2>
                <p className=' px-6 font-[Noto_Sans] text-white text-2xl text-center'>
                    Ce.Ca.T.I. No. 12
                    Av. Atzacoalco No. 7700 col. Constitución de la República Alcaldia Gustavo A. Madero México, Ciudad de México.
                </p>
            </div>
        </main>
    )
}