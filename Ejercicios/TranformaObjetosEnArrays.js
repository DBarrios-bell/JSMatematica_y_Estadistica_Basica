//##Ejercicio Transforma objetos en arrays
// En este desafío debes convertir las llaves y valores de un objeto en propiedades (id y name) de un objeto dentro de un array.

// ##Input
// const obj = {
//   123: 'Juanito Alcachofa',
//   456: 'Juanita Alcaparra',
// };

// solution(obj);

// ##Output
// [
//   {
//     id: "123",
//     name: 'Juanito Alcachofa',
//   },
//   {
//     id: "456",
//     name: 'Juanita Alcaparra',
//   },
// ]


function solution(obj) {
    const usersArrayOfArrays = Object.entries(obj);
  
    const usersArray = usersArrayOfArrays.map(userArray => {
      return {
        id: userArray[0],
        name: userArray[1],
      };
    })
  
    return usersArray;
  }