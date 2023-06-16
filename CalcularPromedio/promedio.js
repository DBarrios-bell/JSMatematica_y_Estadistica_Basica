const PlatziMath = {}

PlatziMath.esPar = function esPar(lista) {
   return !(lista.length % 2);
}

PlatziMath.esImpar = function esImpar(lista) {
    return lista.length % 2;
}

PlatziMath.calcularMediana = function calcularMediana(listaDesordenada) {
    const lista = PlatziMath.ordenarLista(listaDesordenada);
    const listaEsPar = PlatziMath.esPar(lista);

    if (listaEsPar) {
        const mitad1ListaPar = lista[(lista.length / 2) -1];
        const mitad2ListaPar =  lista[lista.length / 2];
        
        
        const listaMitades = [mitad1ListaPar, mitad2ListaPar]
        PlatziMath.calcularPromedio(listaMitades);

    } else {
        const indexMitadListaImpar = Math.floor(lista.length / 2);
        const medianaListaImpar = lista[indexMitadListaImpar];
        // console.log(indexMitadListaImpar);
        // console.log(medianaListaImpar);
        return medianaListaImpar;
    }
 }

 //NOTA: crear array a partir de objetos -- Object.values - Object.keys - Object.entries
// ----------------Moda

PlatziMath.calcularModa = function calcularModa(lista) {
    const listaCount ={};
    for (let i = 0; i < lista.length; i++) {
        const elemento = lista[i];
        if (listaCount[elemento]) {
            listaCount[elemento] += 1;
        } else {
            listaCount[elemento] = 1;
        }
    }

    const listaArray = Object.entries(listaCount);
    const ordenarListaBi = PlatziMath.ordenarListaBidimensional(listaArray);
    const nubermaxlist = ordenarListaBi[ordenarListaBi.length - 1];
    // console.log({listaCount,listaArray,ordenarListaBi,nubermaxlist});
    // console.log(nubermaxlist);
    const moda = nubermaxlist[0];
    return 'la moda es: ' + moda;
}

// -------------Promedio
PlatziMath.calcularPromedio = function calcularPromedio(lista) {
   //funciona
    // sumar todos los elementos del array / cantidad de elementos
//    let sumaLista = 0;
//    for (let i=0; i < lista.length; i++){
//         sumaLista = sumaLista + lista[i];
//    }

    //hace lo mismo que el for de arriba
//     function sumarTodosElementos(valorAcumulado, nuevoValor) {
//         return valorAcumulado + nuevoValor;   
//     }

//    const sumaLista = lista.reduce(sumarTodosElementos);


//hace lo mismo que las dos de arriba 
//las dos siguientes funciones hacen lo mismo  - funcion 1 y funcion 2

const sumarTodosElementos = (valorAcumulado,nuevoValor)=>valorAcumulado + nuevoValor; //funcion 1
// const sumarTodosElementos = (valorAcumulado,nuevoValor)=>{  //funcion 2
//     return valorAcumulado + nuevoValor;
// };

const sumaLista = lista.reduce(sumarTodosElementos);

   const promedio = sumaLista / lista.length;
   console.log(promedio);
   return promedio;

   //lista.length
}


PlatziMath.ordenarLista = function ordenarLista(listaDesordenada) {
    function ordenarListaSort(valorAcumulado, nuevoValor) {
        // if (valorAcumulado > nuevoValor) {
        //     return 1;
        // } else if(valorAcumulado == nuevoValor) {
        //     return 0;
        // }else if(valorAcumulado < nuevoValor){
        //     return -1;   
        // }
        
        return valorAcumulado - nuevoValor;
    }

    const lista = listaDesordenada.sort(ordenarListaSort); 
    // const lista = listaDesordenada.sort((a,b)=>{a-b}); 
    return lista;
}
//ej -- [ [], [], [], [] ]
PlatziMath.ordenarListaBidimensional = function ordenarListaBidimensional(listaDesordenada) {
    function ordenarListaSort(valorAcumulado, nuevoValor) {
        return valorAcumulado[1] - nuevoValor[1];
    }

    const lista = listaDesordenada.sort(ordenarListaSort); 
    return lista;
}

