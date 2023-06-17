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



    // reestructurando informacion 

    const empresas = {};

    for (persona of salarios) { // se recorre el arreglo de salarios -> salarios.js
        for (trabajo of persona.trabajos) { //por cada persona se recorre el arreglo de trabajo que tuvo la persona

            //se crea un nuevo objeto de empresa que tenga una propiedad por cada distinta empresa
           if(!empresas[trabajo.empresa]){
                empresas[trabajo.empresa] = {};
           }

           if (!empresas[trabajo.empresa][trabajo.persona]) {
                empresas[trabajo.empresa][trabajo.year] = [];
           }

           empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
        }

    }

    console.log({empresas});

    //Ejemplo de los ejecuta el codigo anterior
    /* cada empresa tiene los salarios por años de cada empleado.
    Daily Planet: 
        2018: (4) [1000, 2000, 1500, 3500]
        2019: (4) [1500, 2500, 2000, 3700]
        2020: (4) [1000, 2000, 2000, 3800]
        2021: (4) [1500, 2500, 2500, 4000]
        2022: (4) [2000, 2500, 2500, 4050]
        2023: (4) [1500, 2500, 1500, 4050]
    Freelance: 
        2018: (8) [250, 450, 600, 750, 500, 400, 500, 600]
        2019: (8) [250, 550, 625, 750, 500, 500, 500, 700]
        2020: (7) [400, 575, 750, 600, 500, 500, 150]
        2021: (3) [850, 550, 450]
        2022: (5) [850, 550, 550, 1550, 800]
        2023: [850, 650, 350, 850]
    */


    // calcular mediana de una empresa por año basado en la reestructuracion de la informacion (el punto anterior)
    function mediaEmpresaYear(nombreEmpresa, year) {
        if (!empresas[nombreEmpresa]) {
            console.warn('La empresa '+ nombreEmpresa +' no existe');
        } else if (!empresas[nombreEmpresa][year]){
            console.warn('La empresa ' + nombreEmpresa +' no dio salarios en el año ' + year);
        } else {
            return PlatziMath.calcularMediana(empresas[nombreEmpresa][year]);
        }
    }

    
