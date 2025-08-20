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
    <header className="sticky top-0 z-50 bg-[#611232] grid w-full h-full " >
 
      <div className="flex justify-between items-center text-white py-6">

        <div>
          <Link to={'/body'}>
          <img src={imgGob} className="max-w-24 max-h-20" alt="Logo" />
          </Link>
        </div>

        <div className="flex items-center">
          <a className="px-4" href="#">Trámites</a>
          <a className="pr-4" href="#">Gobierno</a>
          <img className="max-w-8 max-h-8 cursor-pointer pr-3" src={lupa} alt="Buscar" />
        </div>

      </div>

      {/* Fila 2 */}
      <div className="bg-[#A48138] py-8" >
        {/* <nav className="flex justify-evenly text-white">
          <Link to="/caed">CAED</Link>
          <Link to="/especialidades">Especialidades</Link>
          <Link to="/contacto">Contacto</Link>
          <Link href="#">Correo</Link>
        </nav> */}
        <ul className="hidden lg:flex space-x-6 text-2xl text-white font-serif lg:ml-20" id="menu">
            <li><a href="#" className="hover:text-gray-400 transition-colors">Link 1</a></li>
            <li><a href="#" className="hover:text-gray-400 transition-colors">Link 2</a></li>
            <li><Link to="/contacto" className="hover:text-gray-400 transition-colors">Contacto</Link></li>

            <li className="relative group">
                <summary className="cursor-pointer hover:text-gray-400">Parent</summary>
                <ul className="absolute hidden group-hover:block bg-white shadow p-2 rounded">
                    <li><Link to="/caed" className="text-black text-lg hover:text-gray-400">CAED</Link></li>
                    <li><Link to="/especialidades" className="text-black text-lg hover:text-gray-400">Especialidades</Link></li>
                </ul>
            </li>
        </ul>
      </div>
    </header>
  );
};


