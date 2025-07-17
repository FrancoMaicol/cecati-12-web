import React from "react";
import lupa from '../../assets/header/lupa.svg';
import imgGob from '../../assets/header/logo_gob_mx.png'
import { Link } from "react-router-dom";


export default function Header() {
  // return (
  //   <header className="header">
  //     {/* Fila 1 */}
  //     <div className="header-row header-top">
  //       <div className="header-left">
  //         <Link to={'/body'}>
  //           <img src={imgGob} alt="Logo" className="logo-img" />
  //         </Link>
  //       </div>
  //       <div className="header-right">
  //         <a href="#" className="header-link">Trámites</a>
  //         <a href="#" className="header-link">
  //           Gobierno
  //           <img src={lupa} alt="Buscar" className="icon-lupa" />
  //         </a>
  //       </div>
  //     </div>

  //     {/* Fila 2 */}
  //     <div className="header-row header-bottom">
  //       <nav className="nav-links">
  //         <Link to="/caed" className="nav-link">CAED</Link>
  //         <Link href="#" className="nav-link">Oferta Educativa</Link>
  //         <Link href="#" className="nav-link">Contacto</Link>
  //         <Link href="#" className="nav-link">Correo</Link>
  //       </nav>
  //     </div>
  //   </header>
  // );

  return (
    <header className="bg-[#611232]" >
      {/* Fila 1 */}
      <div className="flex">
        <div className="py-6 pl-6 flex-auto">
          <Link to={'/body'}>
            <img className=" max-w-24 max-h-20" src={imgGob} alt="Logo" />
          </Link>
        </div>
        <div className="flex text-white justify-end py-6 pr-10 ">
          <a className="px-4" href="#">Trámites</a>
          <a className="pr-4" href="#"> Gobierno</a>
          <div className="">
            <img className="max-w-6 max-h-6" src={lupa} alt="Buscar" />
          </div>
        </div>
      </div>

      {/* Fila 2 */}
      <div className="bg-[#A48138] py-8" >
        <nav className="flex justify-evenly text-white">
          <Link to="/caed">CAED</Link>
          <Link to="/especialidades">Especialidades</Link>
          <Link href="#">Contacto</Link>
          <Link href="#">Correo</Link>
        </nav>
      </div>
    </header>
  );
};


