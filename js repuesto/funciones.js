export function generarPrimerPagina(doc, data) {

    const img = new Image();
    img.src = '../img/LOGO.png';

    
    // Configuración de dimensiones
    const margin = 8;
    const imgWidth = 55;
    const imgHeight = 15;
    const pageWidth = doc.internal.pageSize.width;
    const lineHeight = 6;  // Aumentado para mejor separación
    const sectionSpacing = 10; // Espaciado entre secciones aumentado
    // Obtener fecha actual
    const today = new Date();
    const day = today.getDate().toString().padStart(2, '0'); 
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const year = today.getFullYear();

    doc.addImage(img, "PNG", margin, margin, imgWidth, imgHeight);
    
    let currentY = margin + imgHeight + 22; // Aumentado espacio después de imagen
    const commonY = margin + (imgHeight / 2);
    
    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    const cecatiY = margin + imgHeight + 2;
    doc.text("CECATI 12", pageWidth / 2, cecatiY, { align: 'center' });

        
    const fechaX = pageWidth - margin - 50;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    
    // Posicionamiento vertical
    const folioY = commonY - 5;  // Posición inicial
    const lineaFolioY = folioY + 6;  // Línea 4 unidades debajo del texto
    const fechaY = lineaFolioY + 5;  // FECHA 8 unidades debajo de la línea
    
    // Texto FOLIO
    doc.text("FOLIO No.", fechaX + 15, folioY);
    doc.line(fechaX + 10, lineaFolioY, fechaX + 45, lineaFolioY);
    
    // Sección FECHA (manteniendo tu formato original)
    doc.text("FECHA", fechaX + 17, fechaY + 3);
    doc.text("DÍA", fechaX + 7, fechaY + 7);
    doc.text("MES", fechaX + 17, fechaY + 7);
    doc.text("AÑO", fechaX + 27, fechaY + 7);
    
    // Valores de fecha (dinámicos)
    doc.setFont(undefined, 'bold');
    doc.text(day.toString(), fechaX + 7, fechaY + 12);
    doc.text(month.toString(), fechaX + 17, fechaY + 12);
    doc.text(year.toString(), fechaX + 27, fechaY + 12);


    doc.rect(margin, currentY - 8, pageWidth - margin * 2, doc.internal.pageSize.height - currentY - margin + 8);
    // 3. Título
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text("ESTUDIO SOCIOECONÓMICO", pageWidth / 2, currentY, { align: 'center' });
    currentY += 9;

    // 4. Objetivo
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const objetivoText = "Objetivo: Deseamos saber algunos aspectos de nuestra población educativa a fin de conocer las condiciones de su ambiente socioeconómico que nos permita adecuar los programas de capacitación, además de asegurar un servicio de calidad. Solicitamos contestar con veracidad la totalidad de los reactivos, mismos que se utilizaran únicamente con fines estadísticos.";
    const splitText = doc.splitTextToSize(objetivoText, pageWidth - 40); // Ajusta el ancho según necesites
    doc.text(splitText, 15, currentY);
    currentY += (lineHeight * splitText.length) + 2;
    
    // 5. Datos del capacitado
    doc.setFont(undefined, 'bold');
    doc.text("I. DATOS DEL CAPACITADO:", 15, currentY);
    
    doc.setFont(undefined, 'normal');
    // Línea 1
    doc.text("No. Control:", 110, currentY);
    doc.text(data.noControl, 130, currentY);
    doc.line(130, currentY + 1, 140, currentY + 1);
    currentY += lineHeight;
    
    doc.text("Nombre:", 15, currentY);
    doc.text(data.nombre, 31, currentY);
    doc.line(31, currentY + 1, 180, currentY + 1);
    currentY += lineHeight;
    
    // Línea 2
    doc.text("Edad:", 15, currentY);
    doc.text(data.edad, 25, currentY);
    doc.line(25, currentY + 1, 55, currentY + 1);
    
    doc.text("Sexo:", 70, currentY);
    doc.text(data.sexo, 80, currentY);
    doc.line(80, currentY + 1, 120, currentY + 1);
    
    doc.text("Estado Civil:", 130, currentY);
    doc.text(data.estadoCivil, 150, currentY);
    doc.line(150, currentY + 1, 180, currentY + 1);
    currentY += lineHeight;
    currentY += sectionSpacing;
    
    // 6. Domicilio
    doc.setFont(undefined, 'bold');
    doc.text("Domicilio:", 15, currentY);
    currentY += lineHeight;
    
    doc.setFont(undefined, 'normal');
    // Línea 1
    doc.text("Calle:", 15, currentY);
    doc.text(data.domicilio.calleDomicilio, 25, currentY);
    doc.line(25, currentY + 1, 100, currentY + 1);
    
    doc.text("No:", 110, currentY);
    doc.text(data.domicilio.numeroDomicilio, 117, currentY);
    doc.line(117, currentY + 1, 123, currentY + 1);
    currentY += lineHeight;
    
    // Línea 2
    doc.text("Colonia:", 15, currentY);
    doc.text(data.domicilio.colonia, 30, currentY);
    doc.line(30, currentY + 1, 100, currentY + 1);
    
    doc.text("Estado:", 110, currentY);
    doc.text(data.domicilio.estado, 125, currentY);
    doc.line(125, currentY + 1, 180, currentY + 1);
    currentY += lineHeight;
    
    // Línea 3
    doc.text("C.P:", 15, currentY);
    doc.text(data.domicilio.cp, 25, currentY);
    doc.line(25, currentY + 1, 70, currentY + 1);
    
    doc.text("Teléfono:", 110, currentY);
    doc.text(data.domicilio.telefono, 125, currentY);
    doc.line(125, currentY + 1, 145, currentY + 1);
    currentY += sectionSpacing;
    
    // 7. Salud
    doc.setFont(undefined, 'bold');
    doc.text("Salud:", 15, currentY);
    currentY += lineHeight;
    
    doc.setFont(undefined, 'normal');
    // Línea 1
    doc.text("Tipo sangre:", 15, currentY);
    doc.text(data.salud.tipoSangre, 35, currentY);
    doc.line(35, currentY + 1, 90, currentY + 1);
    
    doc.text("Alergias:", 110, currentY);
    doc.text(data.salud.alergias, 125, currentY);
    doc.line(125, currentY + 1, 180, currentY + 1);
    currentY += lineHeight;
    // currentY += sectionSpacing;
    
    // Línea 2
    doc.text("Discapacidad:", 15, currentY);
    doc.text(data.salud.tipoDiscapacidad, 39, currentY);
    doc.line(39, currentY + 1, 180, currentY + 1);
    currentY += lineHeight;
    currentY += sectionSpacing;
    
    // 8. Escolaridad
    doc.setFont(undefined, 'bold');
    doc.text("II. ESCOLARIDAD:", 15, currentY);
    doc.setFont(undefined, 'normal');
    doc.text("Escolaridad Concluida:", 100, currentY);
    doc.text(data.escolaridad, 137, currentY);
    doc.line(137, currentY + 1, 180, currentY + 1);
    currentY += lineHeight;
    currentY += sectionSpacing;
    
    // 9. Curso solicitado
    doc.setFont(undefined, 'bold');
    doc.text("III. CURSO SOLICITADO:", 15, currentY);
    currentY += lineHeight;
    
    doc.setFont(undefined, 'normal');
    // Línea 1 - Especialidad
    doc.text("Especialidad:", 15, currentY);
    doc.text(data.curso.especialidad, 37, currentY);
    doc.line(37, currentY + 1, 180, currentY + 1);
    currentY += lineHeight;
    
    // Línea 2 - Curso y Horario
    doc.text("Curso:", 15, currentY);
    doc.text(data.curso.nombreCurso, 28, currentY);
    doc.line(28, currentY + 1, 100, currentY + 1);
    
    doc.text("Horario:", 130, currentY);
    doc.text(data.curso.horario, 143, currentY);
    doc.line(143, currentY + 1, 180, currentY + 1);
    currentY += lineHeight;
    
    doc.text("Grupo:", 15, currentY);
    doc.text(data.curso.grupo, 28, currentY);
    doc.line(28, currentY + 1, 60, currentY + 1);

    doc.text("¿Cómo se enteró de la existencia del CECATI?:", 70, currentY);
    doc.text(data.curso.pregunta, 146, currentY);
    doc.line(146, currentY + 1, 180, currentY + 1);
    currentY += lineHeight;  // Movemos el cursor vertical abajo 
    currentY += sectionSpacing;      
    
    // 10. Ocupación
    doc.setFont(undefined, 'bold');
    doc.text("IV. OCUPACIÓN:", 15, currentY);
    currentY += lineHeight;
    
    doc.setFont(undefined, 'normal');
    // Línea 1 - Ocupación y Salario
    doc.text("Ocupación:", 15, currentY);
    doc.text(data.ocupacion.opcionOcupacion, 34, currentY);
    doc.line(34, currentY + 1, 90, currentY + 1);
    
    doc.text("Salario:", 110, currentY);
    doc.text(data.ocupacion.salario, 123, currentY);
    doc.line(123, currentY + 1, 180, currentY + 1);
    currentY += lineHeight;
    
    // Línea 2 - Empresa
    doc.text("Razón social de la Empresa:", 15, currentY);
    doc.text(data.datosEmpresa.razonSocial, 61, currentY);
    doc.line(61, currentY + 1, 180, currentY + 1);
    currentY += lineHeight;
    
    // Línea 3 - Domicilio empresa
    doc.text("Domicilio empresa:", 15, currentY);
    doc.text(data.datosEmpresa.domicilio, 47, currentY);
    doc.line(47, currentY + 1, 180, currentY + 1);
    currentY += lineHeight;
    currentY += sectionSpacing;
    
    // 11. Núcleo Familiar
    doc.setFont(undefined, 'bold');
    doc.text("V. NÚCLEO FAMILIAR:", 15, currentY);
    currentY += lineHeight;
    
    doc.setFont(undefined, 'normal');
    // Línea 1 - Tipo vivienda
    doc.text("Tipo vivienda:", 15, currentY);
    doc.text(data.hogar.casa, 38, currentY);
    doc.line(38, currentY + 1, 60, currentY + 1);
    
    if (data.hogar.otra) {
        doc.text("Especifique:", 110, currentY);
        doc.text(data.hogar.otra, 135, currentY);
        doc.line(135, currentY + 1, 180, currentY + 1);
    }
    // currentY += lineHeight;
    
    // Línea 2 - Características
    doc.text("Recámaras:", 70, currentY);
    doc.text(data.hogar.recamaras, 90, currentY);  
    doc.line(90, currentY + 1, 100, currentY + 1); 
    
    doc.text("Sala:", 110, currentY);
    doc.text(data.hogar.sala, 120, currentY);
    doc.line(120, currentY + 1, 135, currentY + 1); // Línea más corta 
    // Línea 3 - Baño
    doc.text("Baño:", 145, currentY);
    doc.text(data.hogar.wc, 155, currentY);
    doc.line(155, currentY + 1, 170, currentY + 1);

}

export function generarSegundaPagina(doc, dataGastos) {
    // Configuración
    const margin = 10;
    const pageWidth = doc.internal.pageSize.width;
    const lineHeight = 6;
    const sectionSpacing = 13;
    
    // Crear nueva página
    doc.addPage();
    let currentY = margin + 10;

    // 1. HABITANTES DEL HOGAR (Ahora primero)

    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text("I. HABITANTES DEL HOGAR", margin, currentY);
    currentY += lineHeight;

    const cols = [
        { title: "Nombre", width: 40, key: "nombre" },
        { title: "Parentesco", width: 30, key: "parentesco" },
        { title: "Edad", width: 15, key: "edad" },
        { title: "Escolaridad", width: 40, key: "escolaridad" },
        { title: "Ocupación", width: 40, key: "ocupacion" },
        { title: "Ingreso", width: 20, key: "ingresoMensual"}
    ];

    const cellHeight = lineHeight + 2;

    doc.setFontSize(9);
    let colX = margin;
    cols.forEach(col => {
        // Texto
        doc.text(col.title, colX + 2, currentY + 5, { align: col.align || 'left' });
        // Borde
        doc.rect(colX, currentY, col.width, cellHeight);
        colX += col.width;
    });
    currentY += cellHeight;

    // Datos (filtrar filas vacías)
    const habitantes = (dataGastos.habitantes || []).filter(h => 
        h.nombre || h.parentesco || h.edad || h.escolaridad || h.ocupacion || h.ingresoMensual
    );

    doc.setFont(undefined, 'normal');

    habitantes.forEach(habitante => {
        colX = margin;
        cols.forEach(col => {
            const value = habitante[col.key] || '-';
            const displayValue = col.key === 'ingresoMensual' && value !== '-' ? `$${parseFloat(value).toFixed(2)}` : value;
            // Texto
            const textX = (col.align === 'right') ? colX + col.width - 2 : colX + 2;
            doc.text(displayValue, textX, currentY + 5, { align: col.align || 'left' });
            // Borde
            doc.rect(colX, currentY, col.width, cellHeight);
            colX += col.width;
        });
        currentY += cellHeight;
    });

    // Total ingresos
    if (habitantes.length > 0) {
        const totalIngresos = habitantes.reduce((sum, h) => sum + (parseFloat(h.ingresoMensual) || 0), 0);
        doc.setFont(undefined, 'bold');
        doc.text("TOTAL INGRESOS:", margin + 110, currentY + 10);
        doc.text(`$${totalIngresos.toFixed(2)}`, margin + 180, currentY + 10, { align: 'right' });
        currentY += sectionSpacing * 2;
    } else {
        currentY += sectionSpacing;
    }

    // 2. BIENES Y SERVICIOS (Ahora primero)
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text("II. BIENES Y SERVICIOS", margin, currentY);
    currentY += lineHeight;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');

    const bienes = dataGastos.bienesYServicios || {};
    const servicios = [
        { label: "Lavadora", value: bienes.lavadora },
        { label: "Computadora", value: bienes.computadora },
        { label: "Celular", value: bienes.celular },
        { label: "Automóvil", value: bienes.automovil },
        { label: "Calentador", value: bienes.calentador }
    ];

    // Filtrar solo items con valor definido
    const serviciosConValor = servicios.filter(item => item.value);

    if (serviciosConValor.length > 0) {
        const cellHeight = lineHeight + 2;
        const cellWidth1 = 60;
        const cellWidth2 = 60;
    
        // Encabezado
        doc.setFont('helvetica', 'bold');
        doc.text("Bien/Servicio", margin + 2, currentY + 5);
        doc.text("Respuesta", margin + cellWidth1 + 2, currentY + 5);
    
        doc.rect(margin, currentY, cellWidth1, cellHeight);
        doc.rect(margin + cellWidth1, currentY, cellWidth2, cellHeight);
    
        currentY += cellHeight;
    
        // Celdas de contenido
        doc.setFont('helvetica', 'normal');
        serviciosConValor.forEach((item) => {
            doc.text(item.label, margin + 2, currentY + 5);
            doc.text(String(item.value), margin + cellWidth1 + 2, currentY + 5);
    
            doc.rect(margin, currentY, cellWidth1, cellHeight);
            doc.rect(margin + cellWidth1, currentY, cellWidth2, cellHeight);
    
            currentY += cellHeight;
        });
    
        currentY += sectionSpacing;
        
    } else {
        doc.text("No se registraron bienes", margin, currentY);
        currentY += sectionSpacing;
    }

    // 3. DISTRIBUCIÓN DE GASTOS MENSUALES (Ahora segundo)
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text("III. DISTRIBUCIÓN DE GASTOS MENSUALES", margin, currentY);
    currentY += lineHeight;

    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');

    const gastos = dataGastos.distribucionGastos || {};
    const gastosLista = [
        { label: "Predial", value: gastos.predial },
        { label: "Luz", value: gastos.luz },
        { label: "Alimentación", value: gastos.alimentacion },
        { label: "Renta", value: gastos.renta },
        { label: "Agua", value: gastos.agua },
        { label: "Transporte", value: gastos.transporte },
        { label: "Teléfono", value: gastos.telefono },
        { label: "Gas", value: gastos.gas },
        { label: "Vestido", value: gastos.vestido },
        { label: "Educación", value: gastos.educacion },
        { label: "Diversiones", value: gastos.diversiones },
        { label: "Otros", value: gastos.otros }
    ];

    // Definir anchos de columnas
    const colConceptoWidth = 80;
    const colMontoWidth = 40;
    const colHeight = lineHeight + 2;

    // Cabecera con bordes
    doc.setFont(undefined, 'bold');
    doc.text("Concepto", margin + 2, currentY + 5);
    doc.text("Monto", margin + colConceptoWidth + 2, currentY + 5);
    doc.rect(margin, currentY, colConceptoWidth, colHeight);
    doc.rect(margin + colConceptoWidth, currentY, colMontoWidth, colHeight);
    currentY += colHeight;

    // Filas de gastos con bordes
    doc.setFont(undefined, 'normal');
    gastosLista.forEach(item => {
        if (item.value || item.value === 0) {
            const monto = `$${parseFloat(item.value || 0).toFixed(2)}`;
            doc.text(item.label, margin + 2, currentY + 5);
            doc.text(monto, margin + colConceptoWidth + colMontoWidth - 2, currentY + 5, { align: 'right' });

            doc.rect(margin, currentY, colConceptoWidth, colHeight);
            doc.rect(margin + colConceptoWidth, currentY, colMontoWidth, colHeight);
            currentY += colHeight;
        }
    });

    // Total con bordes
    doc.setFont(undefined, 'bold');
    const total = parseFloat(gastos.total || gastosLista.reduce((sum, item) => sum + (parseFloat(item.value) || 0), 0));

    doc.text("TOTAL GASTOS", margin + 2, currentY + 5);
    doc.text(`$${total.toFixed(2)}`, margin + colConceptoWidth + colMontoWidth - 2, currentY + 5, { align: 'right' });

    doc.rect(margin, currentY, colConceptoWidth, colHeight);
    doc.rect(margin + colConceptoWidth, currentY, colMontoWidth, colHeight);
    currentY += sectionSpacing * 2;

    // --- IV. ACTIVIDADES DEL PLANTEL ---
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text("IV. ACTIVIDADES DEL PLANTEL", 15, currentY);
    currentY += lineHeight;

    doc.setFont('helvetica', 'normal');
    const actividades = dataGastos.actividades || {};

    // Campo 1
    doc.text("Relación con el trabajo:", 15, currentY);
    doc.text(actividades.relacionTrabajo || '', 60, currentY);
    doc.line(60, currentY + 1, 140, currentY + 1);
    currentY += lineHeight;

    // Campo 2
    doc.text("Beneficios esperados de la capacitación:", 15, currentY);
    doc.text(actividades.beneficiosCapacitacion || '', 92, currentY);
    doc.line(92, currentY + 1, 180, currentY + 1);
    currentY += lineHeight;

    // Campo 3
    doc.text("Motivo de participación:", 15, currentY);
    doc.text(actividades.motivoParticipacion || '', 60, currentY);
    doc.line(60, currentY + 1, 180, currentY + 1);
    currentY += sectionSpacing;

    // --- V. OBSERVACIONES ---
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text("V. OBSERVACIONES", 15, currentY);
    currentY += lineHeight;

    doc.setFont('helvetica', 'normal');
    const observaciones = dataGastos.observaciones || {};

    // Campo 1
    doc.text("Observaciones generales:", 15, currentY);
    doc.text(observaciones.observaciones || '', 65, currentY);
    doc.line(65, currentY + 1, 180, currentY + 1);
    currentY += lineHeight;

    // Campo 2
    doc.text("Porcentaje autorizado:", 15, currentY);
    doc.text(observaciones.porcentajeAutorizado ? observaciones.porcentajeAutorizado + '%' : '', 58, currentY);
    doc.line(58, currentY + 1, 80, currentY + 1);
    currentY += lineHeight;

    // Campo 3
    doc.text("Número de baucher:", 15, currentY);
    doc.text(observaciones.noBaucher || '', 55, currentY);
    doc.line(55, currentY + 1, 100, currentY + 1);

    // Campo 4 (en la misma línea)
    doc.text("Becas autorizadas:", 110, currentY);
    doc.text(observaciones.becasAutorizadas || '', 147, currentY);
    doc.line(147, currentY + 1, 180, currentY + 1);
    currentY += sectionSpacing;
    currentY += lineHeight;

    doc.setFont('helvetica', 'normal');
    const firmantes = dataGastos.firmantes || {};

    const lineLength = 40;
    const textOffset = 2;
    const firmaY = currentY + 2; // Altura común para todas las firmas
    const lineY = firmaY;
    const nameY = lineY + 3 + textOffset;
    const positionY = nameY + 5;
    
    // === Firma 1: Aplicador ===
    doc.setFontSize(12);
    doc.line(15, lineY, 15 + lineLength, lineY); // Línea de firma
    doc.setFont('helvetica', 'bold');
    doc.text(firmantes.aplicador || "", 25, nameY); // Nombre
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text("Aplicador", 28, nameY); // Cargo
    
    // === Firma 2: Director del plantel ===
    doc.line(70, lineY, 70 + lineLength, lineY);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text("Lic. Joel López López", 70, nameY);
    doc.setFontSize(9);
    doc.text("Director del plantel", 78, positionY);
    
    // === Firma 3: Jefe de área de vinculación ===
    doc.line(148, lineY, 148 + lineLength, lineY);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text("Lic. Mtro. J. Mauricio Vela Segura", 135, nameY);
    doc.setFontSize(9);
    doc.text("Jefe del área de vinculación", 145, positionY);
    
    // Avanzamos currentY para continuar después
    currentY = positionY + sectionSpacing;
    

}
