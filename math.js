console.group('Cuadrado'); //agrupar log 
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

function calcularCuadrado(lado) {
  return{
    perimetro: lado * 4,
    area:lado * lado,
  };
}

console.log({
  ladoCuadrado,
  perimetroCuadrado,
  areaCuadrado
});

console.groupEnd('Cuadrado');

console.group('Triangulo');
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

function calcularTriangulo(lado1, lado2, base, altura) {
  return{
    perimetro: lado1 + lado2,
    area:(base * altura) / 2,
  };
}

function calcularAlturaTriangulo(lado1, base) {
  if(base == lado1){
      console.warn('Este no es un triangulo isosceles');
  }else{
    // h = raizCuadrada (lado1 ** 2 - (base ** 2)/4)
    return Math.sqrt((lado1 ** 2) - ((base**2) / 4));
  }
}


console.log({
  ladoTriangulo1,
  ladoTriangulo2,
  ladoTrianguloBase,
  alturaTriangulo,
  perimetroTriangulo,
  areaTriangulo

});
console.groupEnd('Triangulo');

console.group('Circulo');
const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1415;

const circunferencia = diametroCirculo * PI;
const areaCirculo = (radioCirculo ** 2) * PI;

console.log({
  radioCirculo,
  diametroCirculo,
  PI,
  circunferencia,
  areaCirculo,
});

function CalcularCirculo(radio) {
  const diametro = radio * 2;

  const radioAlCuadrado = Math.pow(radio, 2);
  // const radioAlCuadrado = radio * radio;
  // const radioAlCuadrado = radio ** 2;

  return{
    circunferencia: diametro * Math.PI,
    area: radioAlCuadrado * Math.PI.toFixed(4),
  }
}
console.groupEnd('Circulo');


// // calcular altura de un triangulo  escaleno (todos sus lados son distintos) 
// function solution(lado1, lado2, lado3) {
//   let a = lado1;
//   let b = lado2;
//   let c = lado3;

//   if (a == b || b == c || c == a) {
//     return false;
//   }

//   let s = (a + b + c) / 2;
//   let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));


//   let altura_a = Math.floor(2 * area / a);
//   let altura_b = Math.floor(2 * area / b);
//   let altura_c = Math.floor(2 * area / c);

//   return altura_a;
// }
