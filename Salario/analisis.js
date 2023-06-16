console.log(salarios);

// analisis personal para Juanita
// const personaEnBusqueda = 'Juanita';


function encontrarPersona(personaEnBusqueda) {
    return salarios.find(persona => persona.name == personaEnBusqueda);

    //el codifgo de arriba es el mismo------
    // const persona = salarios.find((persona)=>{
    //     return persona.name == personaEnBusqueda;
    // })
    // return persona;

 }
   

 function medianaPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos; // accedemos a la propiedad trabajos

    const salarios = trabajos.map(function (elemento) { //.map ayuda a recorrer un array
        return elemento.salario;
    });
    const medianaSalarios = PlatziMath.calcularMediana(salarios);
    // console.log(salarios);
    return medianaSalarios;
 }

 function proyeccionPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos; // accedemos a la propiedad trabajos

    let porcentajesCrecimiento  = []; // llenar con los incremento de la persona 

    for (let i = 1; i < trabajos.length; i++) {
        const salarioActual = trabajos[i].salario;
        const salarioPasado  = trabajos[i - 1].salario;
        const crecimiento = salarioActual - salarioPasado;
        const porcentajeCrecimiento = crecimiento / salarioPasado;

        porcentajesCrecimiento.push(porcentajeCrecimiento);
        
    }
    // console.log(porcentajesCrecimiento);

    const medianaPorcentajeCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);

    console.log({porcentajesCrecimiento, medianaPorcentajeCrecimiento});

    const ultimoSalario = trabajos[trabajos.length - 1].salario;
    const AumentoSalarial = ultimoSalario *  medianaPorcentajeCrecimiento;
    const nuevoSalario = ultimoSalario + AumentoSalarial;
  
    return nuevoSalario;
 }

