import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Caed from "./components/enlaces/Caed";
import Especialidades from "./components/enlaces/Especialidades";
import Contacto from "./components/enlaces/Contacto";
// Especialidades

function App() {
  return (
    <Router>
    <Header/>
    <Routes>
      {/* <Route path="/body" element={<Body />} /> */}
      <Route path="/caed" element={<Caed />} />
      <Route path="/especialidades" element={<Especialidades />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
    {/* <Body/> */}
    </Router>
  )
}

export default App
