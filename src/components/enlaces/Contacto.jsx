import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"
import domicilio from '../../assets/body/domicilio.png'
const containerStyle = {
  width: '100%',
  height: '400px'
}

const center = {
    lat: 19.432608,
    lng: -99.133209,
}
export default function Contacto() {
  return(
    <div className="m-4 mt-10 flex flex-col md:flex-row h[500px] gap-4">
      {/* <div className="md:w-1/2 p-4 shadow roundede-xl overflow-auto">
                <h2 className="text-5xl font-bold mb-4 text-center">Dirección</h2>
                <p className="mb-1 font-bold text-3xl">Calle: <span className="font-normal text-2xl">7700, Constitución de la República, 07469 Ciudad de México, CDMX</span></p>
                <p className="mb-1 font-bold text-3xl">Colonia: <span className="font-normal text-2xl">Atzacoalco</span></p>
                <p className="mb-1 font-bold text-3xl">Alcaldia: <span className="font-normal text-2xl">Gustavo A. Madero</span></p>
      </div> */}
      <div className="flex shadow rounded-xl overflow-auto border-green-500 border-4 bg-white">
        <div className="h-48 lg:h-auto md:flex-col"> <img className="h-100 w-100 object-cover m-1" src={domicilio} alt="domicilio" />
        </div>
        <div className="p-4 flex flex-col justify-between leading-normal">
            <h2 className="text-5xl font-bold mb-4 text-center">Dirección</h2>
            <p className="mb-1 font-bold text-3xl">Calle: <span className="font-normal text-2xl">7700, Constitución de la República, 07469 Ciudad de México, CDMX</span></p>
            <p className="mb-1 font-bold text-3xl">Colonia: <span className="font-normal text-2xl">Atzacoalco</span></p>
            <p className="mb-1 font-bold text-3xl">Alcaldia: <span className="font-normal text-2xl">Gustavo A. Madero</span></p>
        </div>
      </div>
      <div className="md:w-1/2 h-full">
            <div className="w-full h-full rounded-xl shadow overflow-hidden">
            <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={15}
                >
                <Marker position={center} />
                </GoogleMap>
            </LoadScript>
            </div>
      </div>
    </div>
  )
}