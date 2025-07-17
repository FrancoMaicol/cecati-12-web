// import doc from "pdfkit";
import {generarPrimerPagina, generarSegundaPagina} from "./funciones.js";

const especialityForm = document.querySelector('#especialidad');
const group = document.querySelector('#grupo');
const hours = document.querySelector("#horario");
const formulario = document.querySelector("#formulario");
// const formularioGasto = document.querySelector("#formularioGastos");
const agregarFila = document.querySelector("#agregarFila");
const totalHabitantesGastos = document.querySelector('#habitantes-body tr td:nth-child(6) input');
const alerta = document.querySelector("#alerta")

document.addEventListener('DOMContentLoaded', () =>{

    mostrarEspecialidades();

    formulario.addEventListener('submit', guardarAlumno);
    agregarFila.addEventListener('click', agregarFilaHabitante);  
    totalHabitantesGastos.addEventListener('input', calcularTotalIngresos);

    // alerta.addEventListener("submit", prevenirCreacionPDF)
});


//validar los campos que todos esten llenos
function guardarAlumno(e) {
    e.preventDefault();
    const datosAlumnos = {
        noControl: document.querySelector("#NoControl").value,
        nombre: document.querySelector('#nombreAlumno').value,
        edad: document.querySelector('#edadAlumno').value,
        sexo: document.querySelector('#opcionesSexo').value,
        estadoCivil: document.querySelector('#opcionesCivil').value,
        domicilio: {
            calleDomicilio: document.querySelector('#calle').value,
            numeroDomicilio: document.querySelector("#numeroCalle").value,
            colonia: document.querySelector("#colonia").value,
            estado: document.querySelector("#estado").value,
            cp: document.querySelector("#cp").value,
            telefono: document.querySelector("#telefono").value
        },
        salud: {
            tipoSangre: document.querySelector("#tipoSangre").value,
            alergias: document.querySelector("#alergias").value,
            tipoDiscapacidad: document.querySelector("#opcionesDiscapacidad").value,
        },
        escolaridad: document.querySelector("#opcionesEscolaridad").value,
        curso: {
            especialidad: document.querySelector("#especialidad").value,
            grupo: document.querySelector("#grupo").value,
            horario: document.querySelector("#horario").value,
            nombreCurso: document.querySelector("#curso").value,
            pregunta: document.querySelector("#preguntaCecati").value
        },
        ocupacion: {
            opcionOcupacion: document.querySelector("#opcionesOcupacion").value,
            // otraOcupacion: document.querySelector("#ocupacionOtro").value,
            horario: document.querySelector("#opcionesHorario").value,
            salario: document.querySelector("#opcionesSalario").value,
        },
        datosEmpresa: {
            razonSocial: document.querySelector("#razonSocial").value,
            domicilio: document.querySelector("#domicilioEmpresa").value,
        },
        hogar: {
            casa: document.querySelector("#opcionesHogar").value,
            otra: document.querySelector("#hogarOtro").value,
            recamaras: document.querySelector("#recamaras").value,
            sala: document.querySelector("#sala").value,
            cocina: document.querySelector("#cocina").value,
            comedor: document.querySelector("#comedor").value,
            wc: document.querySelector("#wc").value,
        }
    }

    const datosFormulario = {
        habitantes: [],
        bienesYServicios: {
            lavadora: document.querySelector('input[name="lavadora"]:checked') ? document.querySelector('input[name="lavadora"]:checked').value : null,
            celular: document.querySelector('input[name="celular"]:checked') ? document.querySelector('input[name="celular"]:checked').value : null,
            computadora: document.querySelector('input[name="computadora"]:checked') ? document.querySelector('input[name="computadora"]:checked').value : null,
            automovil: document.querySelector('input[name="automovil"]:checked') ? document.querySelector('input[name="automovil"]:checked').value : null,
            calentador: document.querySelector('input[name="calentador"]:checked') ? document.querySelector('input[name="calentador"]:checked').value : null
        },
        distribucionGastos: {
            predial: document.querySelector('#input_predial').value,
            luz: document.querySelector('#input_luz').value,
            alimentacion: document.querySelector('#input_alimentacion').value,
            renta: document.querySelector('#input_renta').value,
            agua: document.querySelector('#input_agua').value,
            transporte: document.querySelector('#input_transporte').value,
            telefono: document.querySelector('#input_telefono').value,
            gas: document.querySelector('#input_gas').value,
            vestido: document.querySelector('#input_vestido').value,
            educacion: document.querySelector('#input_educacion').value,
            diversiones: document.querySelector('#input_diversiones').value,
            otros: document.querySelector('#input_otros').value,
            servicioMedico: document.querySelector('#servicio_medico').value
        },
        actividades: {
            relacionTrabajo: document.querySelector('#relacion_trabajo').value,
            beneficiosCapacitacion: document.querySelector('#beneficios_capacitacion').value,
            motivoParticipacion: document.querySelector('#motivo_participacion').value
        },
        observaciones: {
            observaciones: document.querySelector('#observaciones').value,
            porcentajeAutorizado: document.querySelector('#input_porcentaje_autorizado').value,
            noBaucher: document.querySelector('#input_no_baucher').value,
            becasAutorizadas: document.querySelector('#input_becas_autorizadas').value
        },
        firmantes: {
            aplicador: document.querySelector('#aplicador').value,
        }
    };

    // Obtener los habitantes de la tabla
    const filasHabitantes = document.querySelectorAll('#habitantes-body tr');

    filasHabitantes.forEach(fila => {
        const nombre = fila.querySelector('td:nth-child(1) input').value;
        const parentesco = fila.querySelector('td:nth-child(2) input').value;
        const edad = fila.querySelector('td:nth-child(3) input').value;
        const escolaridad = fila.querySelector('td:nth-child(4) input').value;
        const ocupacion = fila.querySelector('td:nth-child(5) input').value;
        const ingresoMensual = fila.querySelector('td:nth-child(6) input').value;

        if (nombre || parentesco || edad || escolaridad || ocupacion || ingresoMensual) {
            datosFormulario.habitantes.push({
                nombre,
                parentesco,
                edad,
                escolaridad,
                ocupacion,
                ingresoMensual
            });
        }
    });

    //No envia la alerta con estas opciones
    const camposOpciones = [
        "otraOcupacion",
        "hogarOtro",
        "otra"
    ]
    const validacionAlumno = prevenirCreacionPDF(datosAlumnos, camposOpciones);
    const validarFormulario = prevenirCreacionPDF(datosFormulario, camposOpciones)

    if(!validacionAlumno || ! validarFormulario) {
        mostrarAlerta("Falta llenar algún dato")
        return;
    }
    // Llama a la función para generar el PDF
    // generarPDF(datosAlumnos, datosFormulario);
    fetch("http://localhost:3000/api/guardarDatos", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ datosAlumnos, datosFormulario })
    })
    .then(response => response.json())
    .then(data => {
        console.log("Datos guardados y PDF generado", data)
        generarPDF(datosAlumnos, datosFormulario);
    })
    .catch(error => console.error("Error al guardar datos", error))

  
}

function mostrarAlerta(mensaje) {
    limpiarAlerta();
    const error = document.createElement('p');
    error.textContent = mensaje;
    error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');
    formulario.appendChild(error);

    setTimeout(() => {
        error.remove();
    }, 3000);
}

function limpiarAlerta() {
    const alerta = document.querySelector(".bg-red-600");
    if(alerta) {
        alerta.remove();
    }
}
// function guardarEnJSON(datosAlumnos) {
//     // console.log("datos de alumnos", datosAlumnos);
//     let alumnos = JSON.parse(localStorage.getItem('alumnos')) || [];

//     alumnos.push(datosAlumnos);

//     localStorage.setItem("alumnos", JSON.stringify(alumnos));
// }

function generarPDF(dataSocioeconomico, dataGastos) {
    const doc = new jspdf.jsPDF();
    
    generarPrimerPagina( doc, dataSocioeconomico);
    generarSegundaPagina(doc, dataGastos);
    
    doc.save(`Estudio_Socioeconomico_${dataSocioeconomico.noControl}.pdf`);
}

function prevenirCreacionPDF(dataObj, excepciones = []) {

    for (const key in dataObj) {
        //con esta condicional, entramos a todas las propiedades del objeto principal
        if (Object.prototype.hasOwnProperty.call(dataObj, key)) {

            const valor = dataObj[key];
            // console.log("Valor entregado", valor)
            //Comparamos si es un objeto, o si es null el valor
            if(typeof valor === 'object' && valor !== null){
                const resultado = prevenirCreacionPDF(valor, excepciones)
                if(!resultado) {
                    return false
                }    
            
            }else{
                //no valida los datos agregados en el objeto "excepciones"
                if(excepciones.includes(key)) continue;

                if(!valor || valor.toString().trim() === "") {
                    return false;
                }
            }
        }
    }
    return true;
}

/**FIN de Cargar y guardar datos */

/*** Funcion para agregar fila*/
function agregarFilaHabitante(e){
    e.preventDefault();
    const tbody = document.querySelector('#habitantes-body');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td><input type="text" class="w-full p-2 border-none outline-none"></td>
        <td><input type="text" class="w-full p-2 border-none outline-none"></td>
        <td><input type="number" class="w-full p-2 border-none outline-none"></td>
        <td><input type="text" class="w-full p-2 border-none outline-none"></td>
        <td><input type="text" class="w-full p-2 border-none outline-none"></td>
        <td><input type="number" class="w-full p-2 border-none outline-none"></td>
    `;
    tbody.appendChild(newRow);
    
    // Agregar evento para calcular total
    newRow.querySelector('td:nth-child(6) input').addEventListener('input', calcularTotalIngresos);
}

function calcularTotalIngresos() {
    let total = 0;
    document.querySelectorAll('#habitantes-body tr td:nth-child(6) input').forEach(input => {
        total += parseFloat(input.value) || 0;
    });
    document.querySelector('#total-ingreso').textContent = total.toFixed(2);
}
/**
 * Funciones para extraer los datos de "db.json"
 */
async function mostrarEspecialidades(){
    try {
        const response = await fetch ("../db.json");
        const data = await response.json();
        mostrarCategoria(data.especialidades)
    } catch (error) {
        console.log("Hubo un error al cargar la BD", error)
    }
    // try {
    //     const url = 'http://localhost:4001/especialidades'
    //     fetch(url)
    //         .then(respuesta => respuesta.json())
    //         .then(resultado => mostrarCategoria(resultado))

    // } catch (error) {
    //     console.log({title: "Error al cargar el DB", details: error})
    // }
}

function mostrarCategoria(datos) {
    //new Set() elimina los repetidos
    const uniqueCategory = new Set();

    //Agregando las especialidades unicas al campo "Especialidad"
    datos.forEach(dato => {
        // console.log("datos foreach", dato)
        const { especialidad } = dato;

        uniqueCategory.add(especialidad);

        const optionEspeciality = document.createElement('option');
        optionEspeciality.textContent = especialidad;
        optionEspeciality.value = especialidad;

        especialityForm.appendChild(optionEspeciality)
    });


    especialityForm.addEventListener('change', e =>{
        const selectEspeciality = e.target.value;
        // console.log("especialidad", selectEspeciality)
        //Cada que se mande a llamar una especialidad limpia los datos
        limpiarHTML(group);
        limpiarHTML(hours);

        const selectData = datos.find(dato => dato.especialidad === selectEspeciality);
        // console.log("select data", selectData);
        mostrarGrupo(selectData.grupos);

    })
}

function mostrarGrupo(grupos) {
    // console.log(grupos);
    const uniqusNames = new Set();

    try {
        if(grupos) {
            grupos.forEach( grupo => {
                const {nombre} = grupo;

                if(!uniqusNames.has(nombre)) {
                    const optionGroup = document.createElement('option');

                    optionGroup.textContent = nombre;
                    optionGroup.value = nombre;

                    group.appendChild(optionGroup);
                    uniqusNames.add(nombre)
                }
            })
        }
    } catch (error) { console.log({title:"Error al capturar los grupos", details: error}) }

    group.addEventListener('change', e =>{
        const selectGroup = e.target.value;

        limpiarHTML(hours)
        const selectData = grupos.find( grupo => grupo.nombre === selectGroup)

        mostrarHoras(selectData.horarios)
    })

}

function mostrarHoras(horarios) {
    console.log(horarios);
    try {
        horarios.forEach(horario => {

            const optionHours = document.createElement('option');
            optionHours.textContent = horario;
            optionHours.value = horario;

            hours.appendChild(optionHours);
        })
    } catch (error) {
        console.log({title: "Errror al cargar las horas", details: error})
    }
}

function limpiarHTML(select) {
    while(select.firstChild ){
        select.removeChild(select.firstChild);
    }
}
