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
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    const salarios = trabajos.map(function (elemento) {
        return elemento.salario;
    });
    const medianaSalarios = PlatziMath.calcularMediana(salarios);
    // console.log(salarios);
    return medianaSalarios;
 }