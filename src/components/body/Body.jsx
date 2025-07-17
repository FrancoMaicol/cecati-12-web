import cecati from '../../assets/body/cecati.jpeg'
import escuela from '../../assets/body/escuela.jpeg'

export default function Body() {
    return (
    <main className="body">
      {/* Sección 1 */}
      <section className="seccion seccion-uno">
        <div className="lado-izquierdo">
          <img src={cecati} alt="Principal" className="imagen-principal" />
        </div>
        <div className="lado-derecho">
          <h2>Bienvenido al CECATI 12</h2>
          <p>
            En nuestro centro encontrarás formación de calidad, orientada al crecimiento profesional y personal.
            Descubre nuestros cursos, conoce a nuestro equipo y únete a una comunidad que se esfuerza por aprender y mejorar.
          </p>
        </div>
      </section>
       
      <section className="seccion-tres-columnas">
         <div>
            <img src={escuela} alt="Escuela" className="imagen-escuela" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quaerat aliquam omnis earum beatae! Facilis soluta cumque sit voluptates. Officiis reprehenderit impedit ad vitae molestias eos sed praesentium eum debitis?
            </p>
        </div>
        <div>
            <img src={escuela} alt="Escuela" className="imagen-escuela" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quaerat aliquam omnis earum beatae! Facilis soluta cumque sit voluptates. Officiis reprehenderit impedit ad vitae molestias eos sed praesentium eum debitis?
            </p>
        </div>
        <div>
            <img src={escuela} alt="Escuela" className="imagen-escuela" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quaerat aliquam omnis earum beatae! Facilis soluta cumque sit voluptates. Officiis reprehenderit impedit ad vitae molestias eos sed praesentium eum debitis?
            </p>
        </div>
      </section>

      {/* Aquí irán más secciones luego */}
    </main>
  );
};
