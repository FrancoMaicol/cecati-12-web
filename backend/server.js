const express = require('express');
// const cors = require('cors');
const bodyParser = require('body-parser');
const {Pool} = require('pg');
require('dotenv').config();
const path = require('path');


const app = express();
const port = 3000;

//Middlewares
// app.use(cors());
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json());

// //Ruta de prueba
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

//Conexión a BD
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {rejectUnauthorized: false }
// })
const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
})

//ruta para la tabla de alumnos
app.post('/api/guardarDatos', async (req, res) => {
  console.log("respuesta del front", req.body);

    const {datosAlumnos, datosFormulario} = req.body
    try {
        
      const { noControl, nombre, edad, sexo, estadoCivil,escolaridad, domicilio, salud, curso, ocupacion, datosEmpresa, hogar } = datosAlumnos;
    
      const { calleDomicilio, numeroDomicilio, colonia, estado, cp, telefono } = domicilio;
  
      const {  tipoSangre, alergias, tipoDiscapacidad } = salud;
  
      const { especialidad, grupo, horario, nombreCurso, pregunta } = curso;
  
      const { opcionOcupacion, horario: ocupacionHorario, salario } = ocupacion;
  
      const { razonSocial, domicilio: domicilioEmpresa} = datosEmpresa;
  
      const { casa, otra, recamaras, sala, cocina, comedor, wc } = hogar;
  
      // Desestructurar los datos de 'datosFormulario' si es necesario
      const { habitantes, bienesYServicios, distribucionGastos, actividades, observaciones, firmantes } = datosFormulario;

      const {lavadora, celular, computadora, automovil, calentador} = bienesYServicios;
      const { predial, luz, alimentacion, renta, agua, transporte, telefono: telefonoGastos, gas, vestido, educacion, diversiones, otros, servicioMedico} = distribucionGastos
      const {relacionTrabajo, beneficiosCapacitacion, motivoParticipacion} = actividades
      const { observaciones: datosObservacion, porcentajeAutorizado, noBaucher, becasAutorizadas } = observaciones
      const { aplicador } = firmantes
  
      // Realizar la consulta para insertar los datos en la base de datos
      const alumnoQuery = `
        INSERT INTO datos_alumnos (
          no_control, nombre, edad, sexo, estado_civil, calle_domicilio, numero_domicilio, colonia, estado, cp, telefono, tipo_sangre, alergias, tipo_discapacidad, escolaridad, especialidad, grupo, horario_curso, nombre_curso, pregunta, ocupacion, horario_ocupacion, salario_ocupacion, razon_social_empresa, domicilio_empresa, casa, hogar_otra, recamaras, sala, cocina, comedor, wc) 
          VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32 )`;
  
      const valores = [
          noControl, nombre, edad, sexo, estadoCivil, calleDomicilio, numeroDomicilio, colonia, estado, cp, telefono, tipoSangre, alergias, tipoDiscapacidad, escolaridad, especialidad, grupo, horario, nombreCurso, pregunta, opcionOcupacion, ocupacionHorario, salario, razonSocial, domicilioEmpresa, casa, otra, recamaras, sala, cocina, comedor, wc 
        ];
        
      // Insertar los datos en la base de datos
      await pool.query(alumnoQuery, valores);
  
        const formularioQuery = `
        INSERT INTO datos_formulario (
          no_control, lavadora, celular, computadora, automovil, calentador,
          predial, luz, alimentacion, renta, agua, transporte, telefono, gas, vestido, educacion, diversiones, otros, servicio_medico, relacion_trabajo, beneficios_capacitacion, motivo_participacion, observaciones, porcentaje_autorizado, no_baucher, becas_autorizadas, aplicador ) VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27 )
      `;
    
      const valoresFormulario = [
        noControl, lavadora, celular, computadora, automovil, calentador, predial, luz, alimentacion, renta, agua, transporte, telefonoGastos, gas, vestido, educacion, diversiones, otros, servicioMedico, relacionTrabajo, beneficiosCapacitacion, motivoParticipacion, datosObservacion, porcentajeAutorizado, noBaucher, becasAutorizadas, aplicador
      ];

      console.log("Valores que se intentan insertar en datos_formulario:");
      console.log(valoresFormulario);

      await pool.query(formularioQuery, valoresFormulario);
      
      if(habitantes && habitantes.length > 0) {
      for (const habitante of habitantes) {
        const insertHabitanteQuery = `
          INSERT INTO datos_habitantes 
          (no_control, nombre, parentesco, edad, escolaridad, ocupacion, ingreso_mensual)
          VALUES ($1, $2, $3, $4, $5, $6, $7)
        `;
        const valoresHabitante = [
          noControl,
          habitante.nombre,
          habitante.parentesco,
          parseInt(habitante.edad),
          habitante.escolaridad,
          habitante.ocupacion,
          parseFloat(habitante.ingresoMensual)
        ];
        await pool.query(insertHabitanteQuery, valoresHabitante);
      }
      }
      // Enviar una respuesta de éxito
      res.status(200).json({message: 'Datos guardados correctamente'});
    } catch (error) {
      console.error('Error al guardar los datos:', error);
      res.status(500).json({message: 'Error al guardar los datos'});
    }
  });
      
  // Iniciar el servidor
  app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
  });